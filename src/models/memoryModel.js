const mongoose = require("mongoose")

const memorySchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: [String]
    },
    imgURL: {
        type: String
    },
    timelineID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "timeline"
    },
    archived: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Model = mongoose.model("memory", memorySchema)

module.exports = Model