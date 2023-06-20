const { response } = require('express');
const { Student } = require('../models');


const getStudents = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, students ] = await Promise.all([
        Student.countDocuments(query),
        Student.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      students
    })
}

const getStudent = async (req, res= response)=>{
    const {id} = req.params
    const student=  await Student.findById(id);
    res.json(student);
}

const createStudent = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existStudent =  await Student.findOne({name: body.name})

    if (existStudent)
    {
        return res.status(400).json({
            msg:`El estudiante ${ existStudent.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const student = new Student(data);

    const newStudent =  await student.save();
    res.status(201).json(newStudent);
}

const updateStudent = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const studentUpdated =  await Student.findByIdAndUpdate(id,data, {new: true} )
    res.json(studentUpdated);
}

const deleteStudent =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedStudent =  await Student.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedStudent);
}

 module.exports ={
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
 }