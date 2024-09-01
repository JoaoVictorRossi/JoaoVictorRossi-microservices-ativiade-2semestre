const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const atendenteSchema = new Schema({
    idPessoa: {
        type: String,
        required: true,
        trim: true
    },
    idDepartamento: {
        type: String,
        required: true,
        trim: true
    },
    idSetor: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Atendente', atendenteSchema);
