const { Router } = require('express');
const { check } = require('express-validator')


const {
    createEstudiante,
    getEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante
} = require('../controllers').Tutorado;

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getEstudiantes);

router.get('/:id'
    , check('id', 'Este no es un ID de Mongo correcto').isMongoId()
    , getEstudiante);

router.post('/', [
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createEstudiante);

router.put('/:id', updateEstudiante);

router.delete('/:id', [
    check('id', 'Debe ser un id de mongo VALIDO').isMongoId()
], deleteEstudiante);



module.exports = router;