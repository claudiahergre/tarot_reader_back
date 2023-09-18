const router = require('express').Router();

const cartasController = require('../../controllers/cartas.controller');

router.get('/', cartasController.getAll)
router.get('/:cartaId', cartasController.getById)

module.exports = router