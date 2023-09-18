const Carta = require('../models/carta.model')

const getAll = async (req, res) => {
    // res.send('Recupero todas las cartas');
    try {
        const cartas = await Carta.find();
        res.json(cartas);
    } catch (error) {
        res.json({ error: error.message })
    }

}

const getById = async (req, res) => {
    //res.send('Recupero una carta');
    try {
        const { cartaId } = req.params
        const carta = await Carta.findById(cartaId);
        res.json(carta);

    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = {
    getAll, getById
}