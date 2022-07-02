const personModel = require("../models/personModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
    const person = new personModel(req.body)
    person.save(function (err) {
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(201).json(person)
    })
}

const getAll = (req, res) => {
    personModel.find(function (err, people) {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        res.status(200).json(people)
    })
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await personModel.findByIdAndDelete(id)
        res.status(200).json({ message: "arquivo deletado!" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const login = (req, res) => {
    personModel.findOne({ email: req.body.email }, function (error, person) {
        if (!person) {
            return res.status(404).send("não existe colaboradora com este email!")
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, person.senha)

        if (!senhaValida) {
            return res.status(403).send("que senha é essa?")
        }

        const token = jwt.sign({ email: req.body.email }, SECRET)
        res.status(200).json(token)
    })
}

module.exports = {
    create,
    getAll,
    deleteById,
    login
}