const mongoose = require('mongoose')
const Atendente = mongoose.model('Atendente')

exports.get = async () => {
    const result = await Atendente.find({})
    return result
}

exports.create = async (data) => {
    const atendente = Atendente(data)
    await atendente.save()
}

exports.update = async (idPessoa, data) => {
    await Atendente.findByIdAndUpdate(idPessoa, {
        $set: {
            idDepartamento: data.idDepartamento,
            idSetor: data.idSetor

        }
    })
}

exports.delete = async (idPessoa) => {
    await Atendente.findByIdAndDelete(idPessoa);
};
