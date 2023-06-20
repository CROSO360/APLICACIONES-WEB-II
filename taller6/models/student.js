const { model, Schema } = require('mongoose');


const StudentSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del estudiante es necesario'],
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
        }
    }
);


module.exports = model('Student', StudentSchema );