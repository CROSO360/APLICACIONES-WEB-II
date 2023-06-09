const { Router } = require('express')
const { check } = require('express-validator')

const {
    getTutoria,
    getTutorias,
    createTutoria,
    updateTutoria,
    deleteTutoria
} = require('../controllers').Tutoria;

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getTutorias);

router.get('/:id', [
    check('id', 'Este no es un ID de Mongo correcto').isMongoId()
], getTutoria);

router.post('/', [
    check('asignatura', 'La asignatura es requerida').not().isEmpty(),
    validateFields
], createTutoria)

router.put('/:id', updateTutoria)

router.delete('/:id', [
    check('id', 'Debe ser un id de mongo VALIDO').isMongoId()
], deleteTutoria)

module.exports = router;