const { model, Schema } = require('mongoose');

const TutoradoSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del estudiante es necesario'],
            unique:true
        },
        identificacion:{
            type: String,
            required:[true, 'La identificacion del estudiante es necesaria'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Tutorado', TutoradoSchema );