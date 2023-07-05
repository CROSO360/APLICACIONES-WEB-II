const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createTutor,
    getTutor,
    getTutors,
    updateTutor,
    deleteTutor
} = require('../controllers').Tutor;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getTutors );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getTutor );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createTutor);


 router.put('/:id', updateTutor);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteTutor);



module.exports = router;