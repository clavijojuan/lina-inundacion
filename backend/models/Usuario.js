const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    correo: {
        type: String,
        unique: true,
        required: [ true, 'El correo es obligatorio' ]
    },
    contrasena: {
        type: String,
        required: [ true, 'La contraseña es obligatoria' ]
    },
    google: {
        type: Boolean,
        default: false
    },
    activo: {
        type: Boolean,
        default: true
    },
    rol: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Role',
        default: '64287fe1a0a8aecb8644f146'
    },
    nombre: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: false
    }
})

UsuarioSchema.methods.toJSON = function() {
    const { __v, contrasena, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema )