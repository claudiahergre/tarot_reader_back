
const express = require('express');
const cors = require('cors');

const app = express();


app.get('/prueba', (req, res) => {

    res.send('esto es una prueba');

});

app.use(cors());

// rutas
app.use('/api', require('./routes/api'));


module.exports = app