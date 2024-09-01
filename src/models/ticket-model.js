const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    idPessoa: {
        type: String,
        required: true,
        trim: true
    },
    tituloTicket: {
        type: String,
        required: true,
        trim: true
    },
    telefone: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);
