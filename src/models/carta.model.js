const { model, Schema } = require('mongoose');

const cartaSchema = new Schema({
    numero: Number,
    nombre: String,
    descripcion: String,
    interpretacion_positiva: String,
    interpretacion_negativa: String,
    cualidades: String,
    si_o_no: String,
    imagen: String,
    reverso: String
}, { versionKey: false });

module.exports = model('carta', cartaSchema);