const { model, Schema } = require('mongoose');

const TutorSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del tutor es necesario'],
            unique:true
        },
        identificacion:{
            type: String,
            required:[true, 'La identificacion del tutor es necesaria'],
            unique:true
        },
        experticia:{
            type: String,
            default:'Profesor'
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Tutor', TutorSchema );