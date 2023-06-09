const { response } = require('express')
const { Tutoria } = require('../models')


const getTutorias= async (req, res = response )=>{

    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, tutorias ] = await Promise.all([
        Tutoria.countDocuments(query),
        Tutoria.find(query)
        .populate('tutor')
        .populate('tutorado.estudiante.nombre')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      tutorias
    })
    
}

const getTutoria= async (req, res =  response)=>{
    const {id} = req.params
    const tutoria=  await Tutoria.findById(id).populate('tutor').populate('tutorado.estudiante.nombre');
    res.json(tutoria);
}

const createTutoria= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existTutoria =  await Tutoria.findOne({asignatura: body.asignatura})

    if (existTutoria)
    {
        return res.status(400).json({
            msg:`La tutoria ${ existTutoria.asignatura } ya existe`
        })
    }

    const data = {
        ...body,
        asignatura: body.asignatura
    }

    const tutoria = new Tutoria(data);

    const newTutoria =  await tutoria.save();
    res.status(201).json(newTutoria);
}

const updateTutoria= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedTutoria =  await Tutoria.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedTutoria);
}

const deleteTutoria= async (req, res = response)=>{
    const {id} = req.params;
    const deletedTutoria =  await Tutoria.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedTutoria);
}

module.exports = {
    getTutoria,
    getTutorias,
    createTutoria,
    updateTutoria,
    deleteTutoria
};