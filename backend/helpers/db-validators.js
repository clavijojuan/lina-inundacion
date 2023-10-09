const { Usuario, Auditoria } = require('../models');

// usuarios

const existeCorreo = async (correo) => {
  const correoExistente = await Usuario.findOne({ correo });
  if (correoExistente) {
    throw new Error(` El correo ${correo} ya existe `);
  }
};

const validarUsuario = async (_id) => {
  const usuarioExistente = await Usuario.findOne({ _id });
  if (!usuarioExistente) {
    throw new Error(` El usuario no existe `);
  }
};

// auth

const validarCorreo = async (correo) => {
  const correoExistente = await Usuario.findOne({ correo });
  if (!correoExistente) {
    throw new Error(` El correo ${correo} no existe `);
  }
};

// auditoria

const validarTipoAuditoria = async (tipo) => {
  const enums = await Auditoria.schema.path('tipo').enumValues;
  if (!enums.includes(tipo)) {
    throw new Error(` El tipo ${tipo} no posee un valor válido`);
  }
};

module.exports = {
  existeCorreo,
  validarCorreo,
  validarTipoAuditoria,
  validarUsuario,
};
