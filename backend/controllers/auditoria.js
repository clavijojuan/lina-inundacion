const bcryptjs = require('bcryptjs');

const { Auditoria, Usuario, Role } = require('../models');

const reporteFields = [
  'cedula',
  'evento',
  'celular',
  'direccion',
  'lugar',
  'fecha',
  'arboles',
  'encharcamientos',
  'alcantarillado',
  'acueducto',
  'energia',
  'techos',
  'vias',
  'puentes',
  'viviendas',
  'heridos',
  'cultivos',
  'personas',
];

const crearAuditoria = async (req, res) => {
  const { usuario, body } = req;
  const { correo } = usuario;
  const { tipo, mensaje } = body;

  try {
    const auditoriaObj = {
      correo,
      tipo,
      mensaje,
    };

    const auditoria = new Auditoria(auditoriaObj);
    await auditoria.save();

    return res.json({
      ok: true,
      msg: 'Auditoria guardada correctamente',
      auditoria,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

const obtenerAuditorias = async (req, res) => {
  try {
    const auditorias = await Auditoria.find().populate(
      'inundacion',
      reporteFields
    );
    return res.status(200).json(auditorias);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().populate('rol');
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

const crearUsuariodesdeAdmin = async (req, res) => {
  const { correo, nombre, contrasena, rol, activo } = req.body;
  try {
    const usuario = new Usuario({
      correo,
      nombre,
      contrasena,
      rol,
      activo,
    });

    // encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.contrasena = bcryptjs.hashSync(contrasena, salt);

    await usuario.save();
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({
      msg: 'No se pudo crear el usuario',
    });
  }
};

const actualizarUsuariodesdeAdmin = async (req, res) => {
  const { _id, ...rest } = req.body;
  try {
    const usuario = await Usuario.findOneAndUpdate({ _id }, { ...rest });

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({
      msg: 'No se pudo actualizar el usuario',
    });
  }
};

const obtenerRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error en el sistema',
    });
  }
};

module.exports = {
  crearAuditoria,
  obtenerAuditorias,
  obtenerUsuarios,
  obtenerRoles,
  crearUsuariodesdeAdmin,
  actualizarUsuariodesdeAdmin,
};
