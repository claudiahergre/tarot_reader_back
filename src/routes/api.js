const router = require('express').Router();

router.use('/cartas', require('./api/cartas'));

module.exports = router