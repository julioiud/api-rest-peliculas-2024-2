const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial : {
        type : String,
        unique : [true, 'Serial ya existe'],
        required: [true, 'Serial es requerido']
    },
    titulo : {
        type : String,
        required: [true, 'Nombre requerido']
    },
    // TODO: colocar el resto de atributos
    fechaCreacion : {
        type : Date,
        default : new Date()
    },
    fechaActualizacion : {
        type : Date
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    }
    // TODO: el resto de modelos
})

module.exports = model('Media', MediaSchema)