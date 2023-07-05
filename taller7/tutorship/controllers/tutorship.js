const { response } = require('express')
const { Tutorship } = require('../models')


const getTutorships= async (req, res = response )=>{

    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, tutorships ] = await Promise.all([
        Tutorship.countDocuments(query),
        Tutorship.find(query)
        .populate('tutor')
        .populate('students.student.name')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      tutorships
    })
    
}

const getTutorship= async (req, res =  response)=>{
    const {id} = req.params
    const tutorship=  await Tutorship.findById(id).populate('tutor').populate('students.student.name');
    res.json(tutorship);
}

const createTutorship= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existTutorship =  await Tutorship.findOne({name: body.name})

    if (existTutorship)
    {
        return res.status(400).json({
            msg:`La tutoria ${ existTutorship.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const tutorship = new Tutorship(data);

    const newTutorship =  await tutorship.save();
    res.status(201).json(newTutorship);
}

const updateTutorship= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedTutorship =  await Tutorship.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedTutorship);
}

const deleteTutorship= async (req, res = response)=>{
    const {id} = req.params;
    const deletedTutorship =  await Tutorship.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedTutorship);
}

module.exports = {
    getTutorship,
    getTutorships,
    createTutorship,
    updateTutorship,
    deleteTutorship
};