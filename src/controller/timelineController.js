const timelineModel = require("../models/timelineModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAllTimelines = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const allTimelines = await timelineModel.find()
            res.status(200).json(allTimelines)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTimelineById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { id } = req.params
            const findTimeline = await timelineModel.find(id)
            if (findTimeline == null) {
                return res.status(404).json({ message: "id inválido!" })
            }
            res.status(200).json(findTimeline)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllArchivedTimelines = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const findTimeline = await timelineModel.find({ archived: true })
            res.status(200).json(findTimeline)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createNewTimeline = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { title, description } = req.body

            const newTimeline = new timelineModel({
                title, description
            })
            const savedTimeline = newTimeline.save()
            res.status(201).json({ message: "nova timeline criada com sucesso!", savedTimeline })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTimelineById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { title, description } = req.body
            const { id } = req.params

            const findTimeline = await timelineModel.findById(id)

            if (findTimeline == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            findTimeline.title = title || findTimeline.title
            findTimeline.description = description || findTimeline.description

            const savedTimeline = findTimeline.save()
            res.status(200).json({ message: "timeline atualizada com sucesso!", savedTimeline })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTimelineById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para editar um post!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autentificação")
            }
            const { id } = req.params
            const findTimeline = await timelineModel.findById(id)

            if (findTimeline == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            await timelineModel.findByIdAndDelete(id)
            res.status(200).json({ message: "post deletado com sucesso!" })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllTimelines,
    getAllArchivedTimelines,
    getTimelineById,
    createNewTimeline,
    updateTimelineById,
    deleteTimelineById
}