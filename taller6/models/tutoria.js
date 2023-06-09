const { model, Schema } = require('mongoose');

const TutoriaSchema = Schema(
    {
        tutor:{
            type:Schema.Types.ObjectId,
            ref:'Tutor',
            required:true
        },
        tutorado:[{
            estudiante:{
                type:Schema.Types.ObjectId,
                ref:'Tutorado',
                required:true
            }
        }],
        asignatura:{
            type: String,
            required: [ true, 'El nombre de la asignatura es necesario'],
            unique:true
        },
        nHoras:{
            type: Number,
            default:1
        },
        fecha:{
            type: Date
        },
        hora:{
            type:String
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);

TutoriaSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Tutoria', TutoriaSchema );