const { model, Schema } = require('mongoose');

const TutorSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del tutor es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        identification: {
            type: String,
            unique: true
        },
        expertise:{
            type: String,
            default:'Profesor'
        }
}

);


module.exports = model('Tutor', TutorSchema );