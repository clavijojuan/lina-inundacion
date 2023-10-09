const { Schema, model } = require('mongoose');

const AuditoriaSchema = Schema({
  correo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: [
      'Inicio de sesión',
      'Ingreso anónimo',
      'Ingreso por Google',
      'Descarga de información',
      'Reporte de evento',
      'Renovación de sesión',
    ],
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
    default: new Date(),
  },
  mensaje: {
    type: String,
    required: true,
  },
  inundacion: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Reporte',
  },
});

module.exports = model('Auditoria', AuditoriaSchema);
