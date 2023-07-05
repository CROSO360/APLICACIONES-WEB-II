const { response } = require('express');
const { Tutor } = require('../models');


const getTutors = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, tutors ] = await Promise.all([
        Tutor.countDocuments(query),
        Tutor.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      tutors
    })
}

const getTutor = async (req, res= response)=>{
    const {id} = req.params
    const tutor=  await Tutor.findById(id);
    res.json(tutor);
}

const createTutor = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existTutor =  await Tutor.findOne({name: body.name})

    if (existTutor)
    {
        return res.status(400).json({
            msg:`El tutor ${ existTutor.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const tutor = new Tutor(data);

    const newTutor =  await tutor.save();
    res.status(201).json(newTutor);
}

const updateTutor = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const TutorUpdated =  await Tutor.findByIdAndUpdate(id,data, {new: true} )
    res.json(TutorUpdated);
}

const deleteTutor =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedTutor =  await Tutor.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deleteTutor);
}

module.exports ={
createTutor,
getTutor,
getTutors,
updateTutor,
deleteTutor
}