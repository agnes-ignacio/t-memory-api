const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
       },
    nome: {type: String},
    email: {type: String},
    senha: {type: String}
}, { versionKey: false    
})

const Model = mongoose.model('person', personSchema)

module.exports = Model