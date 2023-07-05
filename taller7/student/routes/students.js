const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require('../controllers').Student;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getStudents );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getStudent );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createStudent);


 router.put('/:id', updateStudent);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteStudent);



module.exports = router;