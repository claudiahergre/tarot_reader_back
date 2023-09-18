
const express = require('express');

const app = express();


app.get('/prueba', (req, res) => {

    res.send('esto es una prueba');

});

// rutas
app.use('/api', require('./routes/api'));





module.exports = app