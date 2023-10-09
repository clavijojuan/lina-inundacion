const { model, Schema } = require('mongoose');

const ReporteSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
    },
    evento: {
        type: String,
        required: true
    },
    celular : {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true,
        default: new Date()
    },
    arboles: {
        type: Boolean,
        required: true,
        default: false
    },
    encharcamientos: {
        type: Boolean,
        required: true,
        default: false
    },
    alcantarillado: {
        type: Boolean,
        required: true,
        default: false
    },
    acueducto: {
        type: Boolean,
        required: true,
        default: false
    },
    energia: {
        type: Boolean,
        required: true,
        default: false
    },
    techos: {
        type: Boolean,
        required: true,
        default: false
    },
    vias: {
        type: Boolean,
        required: true,
        default: false
    },
    puentes: {
        type: Boolean,
        required: true,
        default: false
    },
    viviendas: {
        type: Boolean,
        required: true,
        default: false
    },
    heridos: {
        type: Boolean,
        required: true,
        default: false
    },
    cultivos: {
        type: Boolean,
        required: true,
        default: false
    },
    personas: {
        type: Boolean,
        required: true,
        default: false
    },
    geojson: {
        type: String,
        required: true
    }
})

module.exports = model( 'Reporte', ReporteSchema );