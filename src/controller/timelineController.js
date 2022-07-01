const timelineModel = require("../models/timelineModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAllTimelines = async (req, res) => {
    try {
        const allTimelines = await timelineModel.find()
        res.status(200).json(allTimelines)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTimelineById = async (req, res) => {
    try {
        const { id } = req.params
        const findTimeline = await timelineModel.find(id)
        if(findTimeline == null){
            res.status(404).json({ message: "id inválido!"})
        }
        res.status(200).json(findTimeline)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllArchivedTimelines = async (req, res) => {
    try {
        const findTimeline = await timelineModel.find({archived: true})
        res.status(200).json(findTimeline)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createNewTimeline = async (req, res) => {
    try{
        const { title, description } = req.body

        const newTimeline = new timelineModel({ 
            title, description 
        })

        const savedTimeline = newTimeline.save()
        res.status(201).json({ message: "nova timeline criada com sucesso!", savedTimeline})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const updateTimelineById = async (req, res) => {
    try {
        const {title, description} = req.body
        const { id } = req.params

        const findTimeline = await timelineModel.findById(id)

        if (findTimeline == null){
            res.status(404).json({ message: "id inválido!"})
        }

        findTimeline.title = title || findTimeline.title
        findTimeline.description = description || findTimeline.description

        const savedTimeline = findTimeline.save()
        res.status(200).json({ message: "timeline atualizada com sucesso!"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const archiveTimelineById = async (req, res) => {
    try {
        const { id } = req.params
        const findTimeline = await timelineModel.findById(id)

        if(findTimeline == null){
            res.status(404).json({ message: "id inválido!"})
        }

        if (findTimeline.archived == true){
            findTimeline.archived = false
            const savedTimeline = await findTimeline.save()
            res.status(200).json({ message: "timeline desarquivada com sucesso!", savedTimeline})
        } else {
            findTimeline.archived = true
            const savedTimeline = await findTimeline.save()
            res.status(200).json({ message: "timeline arquivada com sucesso!", savedTimeline})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTimelineById = async(req, res) => {
    try {
        const { id } = req.params
        const findTimeline = await timelineModel.findById(id)

        if(findTimeline == null){
            res.status(404).json({message: "id inválido!"})
        }

        await timelineModel.findByIdAndDelete(id)
        res.status(200).json({ message: "post deletado com sucesso!"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = {
    getAllTimelines,
    getAllArchivedTimelines,
    getTimelineById,
    createNewTimeline,
    archiveTimelineById,
    updateTimelineById,
    deleteTimelineById
}