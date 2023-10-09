const { Role } = require('../models');

const esAdmin = async (req, res, next) => {
  const { usuario } = req;
  const { rol } = await Role.findById(usuario.rol._id);

  if (rol !== 'Super admin') {
    return res.status(401).json({
      msg: 'El usuario no es administrador',
    });
  }

  next();
};

const validarRol = async (req, res, next) => {
  const { rol } = req.body;
  if (!rol) {
    try {
      const defaultRol = await Role.findOne({ rol: 'Consultor' });
      req.body.rol = defaultRol._id;
    } catch (error) {
      console.log(error);
    }
  }
  next();
};

module.exports = {
  validarRol,
  esAdmin,
};
