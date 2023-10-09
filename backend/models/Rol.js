const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [ true, 'El rol es obligatorio' ],
    },
    consultar: {
        type: Boolean,
        required: true,
        default: true
    },
    reportar: {
        type: Boolean,
        required: true,
        default: true
    },
    administrar: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = model( 'Role', RoleSchema );
