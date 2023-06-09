const { response } = require('express');
const { Tutorado } = require('../models');


const getEstudiantes = async (req, res = response) => {

    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    const [total, estudiantes] = await Promise.all([
        Tutorado.countDocuments(query),
        Tutorado.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        estudiantes
    })
}


const getEstudiante = async (req, res = response) => {
    const { id } = req.params
    const estudiante = await Tutorado.findById(id);
    res.json(estudiante);
}


const createEstudiante = async (req, res = response) => {
    const { status, ...body } = req.body;
    const existEstudiante = await Tutorado.findOne({ nombre: body.nombre })
    if (existEstudiante) {
        return res.status(400).json({
            msg: `El estudiante ${existEstudiante.nombre} ya existe`
        })
    }

    const data = {
        ...body,
    }
    const estudiante = new Tutorado(data);
    const newEstudiante = await estudiante.save();
    res.status(201).json(newEstudiante);
}


const updateEstudiante = async (req, res = response) => {
    const { id } = req.params;
    const { status, ...data } = req.body;
    const estudianteUpdated = await Tutorado.findByIdAndUpdate(id, data, { new: true })
    res.json(estudianteUpdated);
}

const deleteEstudiante = async (req, res = response) => {
    const { id } = req.params;
    const deletedEstudiante = await Tutorado.findByIdAndUpdate(id, { status: false }, { new: true });
    res.json(deletedEstudiante);
}

module.exports = {
    createEstudiante,
    getEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante
}