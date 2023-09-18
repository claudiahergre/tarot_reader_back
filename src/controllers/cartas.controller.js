const getAll = (req, res) => {
    res.send('Recupero todas las cartas');
}

const getById = (req, res) => {
    res.send('Recupero una carta');
}

module.exports = {
    getAll, getById
}