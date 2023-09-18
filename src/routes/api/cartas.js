const router = require('express').Router();

const cartasController = require('../../controllers/cartas.controller');

router.get('/', cartasController.getAll)

module.exports = router