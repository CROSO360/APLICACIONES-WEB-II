const { model, Schema } = require('mongoose');

const TutorshipSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre de la tutoria es necesario'],
            unique: true
        },
        status: {
            type: Boolean,
            default: true,
            required: true
        },
        hours: {
            type: String
        },
        date: {
            type: String
        },
        hour: {
            type: String
        },
        student:{
            type: Schema.Types.ObjectId,
            ref:'Student',
            required: false
        },
        tutor: {
            type: Schema.Types.ObjectId,
            ref: 'Tutor',
            required: false
        }
    }
);

TutorshipSchema.methods.toJSON = function () {
    const { __v, status, ...data } = this.toObject();
    return data;
}

module.exports = model('Tutorship', TutorshipSchema);