const memoryModel = require("../models/memoryModel")
const timelineModel = require("../models/timelineModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAllMemories = async (req, res) => {
    try {
            const findMemories = await memoryModel.find({}, null, { sort: "date" })
            res.status(200).json(findMemories)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getMemoryById = async (req, res) => {
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
            const findMemory = await memoryModel.findById(id)
            if (findMemory == null) {
                return res.status(404).json({ message: "id inválido!" })
            }
            res.status(200).json(findMemory)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getMemoriesByTimeline = async (req, res) => {
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
            const { timelineID } = req.params
            const findTimeline = await timelineModel.findById(timelineID)

            if (findTimeline == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            const findMemories = await memoryModel.find({ timeline: timelineID }, null, { sort: "date" })
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getMemoriesByCategory = async (req, res) => {
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
            const { category } = req.query
            const findMemories = await memoryModel.find({ category: category }, null, { sort: "date" })

            if (findMemories == null) {
                return res.status(404).json({ message: "nenhuma memória foi encontrada nesta categoria." })
            }

            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getMemoriesByCategoryAndTimeline = async (req, res) => {
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
            const { category } = req.query
            const findMemories = await memoryModel.find({ category: category, timelineID: id }, null, { sort: "date" })

            if (findMemories == null) {
                return res.status(404).json({ message: "nenhuma memória foi encontrada nesta categoria." })
            }

            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllPublicMemories = async (req, res) => {
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
            const findMemories = await memoryModel.find({ archived: false }, null, { sort: "date" })
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPublicMemoriesByCategory = async (req, res) => {
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
            const { category } = req.query
            const findMemories = await memoryModel.find({ category: category, archived: false }, null, { sort: "date" })
            if (findMemories == null) {
                return res.status(404).json({ message: "nenhuma memória foi encontrada com esta categoria!" })
            }
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPublicMemoriesByTimeline = async (req, res) => {
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
            const { timelineID } = req.params
            const findTimeline = await timelineModel.findById(timelineID)

            if (findTimeline == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            const findMemories = await memoryModel.find({ archived: false, timelineID: timelineID }, null, { sort: "date" })
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPublicMemoriesByCategoryAndTimeline = async (req, res) => {
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
            const { category } = req.query
            const findMemories = await memoryModel.find({ category: category, archived: false, timelineID: id }, null, { sort: "date" })
            if (findMemories == null) {
                return res.status(404).json({ message: "nenhuma memória foi encontrada com esta categoria ou o id é inválido!" })
            }
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllArchivedMemories = async (req, res) => {
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
            const findMemories = await memoryModel.find({ archived: true }, null, { sort: "date" })
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getArchivedMemoriesByCategory = async (req, res) => {
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
            const { category } = req.query
            const findMemories = await memoryModel.find({ category: category, archived: true }, null, { sort: "date" })
            if (findMemories == null) {
                return res.status(404).json({ message: "nenhuma memória foi encontrada com esta categoria!" })
            }
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getArchivedMemoriesByTimeline = async (req, res) => {
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
            const { timelineID } = req.params
            const findTimeline = await timelineModel.findById(timelineID)

            if (findTimeline == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            const findMemories = await memoryModel.find({ archived: true, timelineID: timelineID }, null, { sort: "date" })
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getArchivedMemoriesByCategoryAndTimeline = async (req, res) => {
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
            const { category } = req.query
            const findMemories = await memoryModel.find({ category: category, archived: true, timelineID: id }, null, { sort: "date" })
            if (findMemories == null) {
                return res.status(404).json({ message: "nenhuma memória foi encontrada com esta categoria!" })
            }
            res.status(200).json(findMemories)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const createNewMemory = async (req, res) => {
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
            const { title, date, description, category, imgURL, timelineID } = req.body

            const newMemory = new memoryModel({
                title, date, description, category, imgURL, timelineID
            })

            const savedMemory = await newMemory.save()
            res.status(201).json({ message: "nova memória criada com sucesso!", savedMemory })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateMemoryById = async (req, res) => {
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
            const { title, date, description, category, imgURL, timelineID } = req.body
            const findMemory = await memoryModel.findById(id)

            if (findMemory == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            findMemory.title = title || findMemory.title
            findMemory.date = date || findMemory.date
            findMemory.description = description || findMemory.description
            findMemory.category = category || findMemory.category
            findMemory.imgURL = imgURL || findMemory.imgURL
            findMemory.timelineID = timelineID || findMemory.timelineID

            const savedMemory = await findMemory.save()
            res.status(200).json(savedMemory)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const archiveMemoryById = async (req, res) => {
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
            const findMemory = await memoryModel.findById(id)

            if (findMemory == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            if (findMemory.archived == true) {
                findMemory.archived = false
                const savedMemory = await findMemory.save()
                res.status(200).json({ message: "memória desarquivada com sucesso!", savedMemory })
            } else {
                findMemory.archived = true
                const savedMemory = await findMemory.save()
                res.status(200).json({ message: "memória arquivada com sucesso!", savedMemory })
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteMemoryById = async (req, res) => {
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
            const findMemory = await memoryModel.findById(id)

            if (findMemory == null) {
                return res.status(404).json({ message: "id inválido!" })
            }

            await memoryModel.findByIdAndDelete(id)
            res.status(200).json({ message: "memória excluída com sucesso!" })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllMemories,
    getMemoriesByTimeline,
    getMemoryById,
    getMemoriesByCategory,
    getAllPublicMemories,
    getPublicMemoriesByCategory,
    getPublicMemoriesByTimeline,
    getMemoriesByCategoryAndTimeline,
    getArchivedMemoriesByCategoryAndTimeline,
    getPublicMemoriesByCategoryAndTimeline,
    getAllArchivedMemories,
    getArchivedMemoriesByTimeline,
    getArchivedMemoriesByCategory,
    createNewMemory,
    updateMemoryById,
    archiveMemoryById,
    deleteMemoryById
}