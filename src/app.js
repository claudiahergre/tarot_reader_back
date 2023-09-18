
const express = require('express');

const app = express();


app.get('/prueba', (req, res) => {

    res.send('esto es una prueba');

});

// rutas
app.use('/api', require('./routes/api'));
app.use('/cartas', require('./routes/api/cartas'));




module.exports = app