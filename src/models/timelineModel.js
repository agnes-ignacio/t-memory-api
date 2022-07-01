const mongoose = require("mongoose")

const timelineSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    archived: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Model = mongoose.model("timeline", timelineSchema)

module.exports = Model