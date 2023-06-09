const { response } = require('express');
const { Tutor } = require('../models');

const getTutores = async (req, res = response) => {

    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    const [total, tutores] = await Promise.all([
        Tutor.countDocuments(query),
        Tutor.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        tutores
    })
}


const getTutor = async (req, res = response) => {
    const { id } = req.params
    const tutor = await Tutor.findById(id);
    res.json(tutor);
}

const createTutor = async (req, res = response) => {
    const { status, ...body } = req.body;

    const existTutor = await Tutor.findOne({ nombre: body.nombre })
    if (existTutor) {
        return res.status(400).json({
            msg: `El tutor ${existTutor.nombre} ya existe`
        })
    }
    const data = {
        ...body,
    }
    const tutor = new Tutor(data);


    const newTutor = await tutor.save();

    res.status(201).json(newTutor);
}



const updateTutor = async (req, res = response) => {
    const { id } = req.params;
    const { status, ...data } = req.body;
    const tutorUpdated = await Tutor.findByIdAndUpdate(id, data, { new: true })
    res.json(tutorUpdated);
}

const deleteTutor = async (req, res = response) => {
    const { id } = req.params;
    const deletedTutor = await Tutor.findByIdAndUpdate(id, { status: false }, { new: true });
    res.json(deletedTutor);
}

module.exports = {
    createTutor,
    getTutor,
    getTutores,
    updateTutor,
    deleteTutor
}