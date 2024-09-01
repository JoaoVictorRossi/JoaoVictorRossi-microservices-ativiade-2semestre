const mongoose = require('mongoose')
const Ticket = mongoose.model('Ticket')

exports.get = async () => {
    const result = await Ticket.find({})
    return result
}

exports.create = async (data) => {
    const ticket = Ticket(data)
    await ticket.save()
}

exports.update = async (idPessoa, data) => {
    await Ticket.findByIdAndUpdate(idPessoa, {
        $set: {
            tituloTicket: data.tituloTicket,
            telefone: data.telefone

        }
    })
}

exports.delete = async (idPessoa) => {
    await Ticket.findByIdAndDelete(idPessoa);
};
