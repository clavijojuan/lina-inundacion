const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const { Auditoria, Usuario } = require('../models');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo }).populate('rol');

    if (!usuario.activo) {
      return res.status(400).json({
        msg: 'Usuario inactivo',
      });
    }

    const validPassword = bcryptjs.compareSync(contrasena, usuario.contrasena);

    if (!validPassword) {
      return res.status(400).json({
        msg: 'Contraseña incorrecta',
      });
    }

    // generar JWT
    const token = await generarJWT(usuario._id);

    // Guardar auditoria
    const auditoria = new Auditoria({
      correo: usuario.correo,
      tipo: 'Inicio de sesión',
      mensaje: `El usuario de correo ${usuario.correo} ha iniciado sesión`,
    });

    await auditoria.save();

    return res.json({
      login: 'login ok',
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

const unknowLogin = async (req, res) => {
  const { correo, celular } = req.body;
  try {
    const usuario = await new Usuario({ correo, celular }).populate('rol');

    // generar JWT
    const token = await generarJWT(usuario._id);

    // Guardar auditoria
    const auditoria = new Auditoria({
      correo: usuario.correo,
      tipo: 'Ingreso anónimo',
      mensaje: `El usuario de correo ${usuario.correo} ha iniciado sesión de forma anónima`,
    });

    await auditoria.save();

    return res.json({
      login: 'login ok',
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

const renew = async (req, res) => {
  const { usuario } = req;
  try {
    const token = await generarJWT(usuario._id);

    // Guardar auditoria
    const auditoria = new Auditoria({
      correo: usuario.correo,
      tipo: 'Renovación de sesión',
      mensaje: `El usuario de correo ${usuario.correo} renovó la sesión`,
    });

    await auditoria.save();

    return res.json({
      login: 'login ok',
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

const googleLogin = async (req, res) => {
  const { id_token, rol } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { correo, nombre } = await googleVerify(id_token);

    let usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      const data = {
        nombre,
        correo,
        contrasena: ':P',
        google: true,
        rol,
      };

      usuario = new Usuario(data);
      await usuario.save();
    }

    if (!usuario.activo) {
      return res.status(401).json({
        msg: 'Acceso denegado, hable con el administrador',
      });
    }

    // generar JWT
    const token = await generarJWT(usuario._id);

    // Guardar auditoria
    const auditoria = new Auditoria({
      correo: usuario.correo,
      tipo: 'Ingreso por Google',
      mensaje: `El usuario de correo ${usuario.correo} ha iniciado sesión por medio de Google`,
    });

    await auditoria.save();

    await session.commitTransaction();

    return res.json({
      login: 'login ok',
      usuario: await usuario.populate('rol'),
      token,
    });
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    return res.status(400).json({
      msg: 'El token no se pudo verificar',
    });
  }
};

module.exports = {
  login,
  renew,
  googleLogin,
  unknowLogin,
};
