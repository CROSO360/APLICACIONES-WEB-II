const { Router } = require('express')
const { check } = require('express-validator')

const { createTutorship,
    getTutorship,
    getTutorships,
    updateTutorship,
    deleteTutorship
} = require('../controllers').Tutorship;

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getTutorships);

router.get('/:id', [
    check('id', 'Este no es un ID de Mongo correcto').isMongoId()
], getTutorship);

router.post('/', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
], createTutorship)

router.put('/:id', updateTutorship)

router.delete('/:id', [
    check('id', 'Debe ser un id de mongo VALIDO').isMongoId()
], deleteTutorship)

module.exports = router;