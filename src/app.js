require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const timelineRoutes = require("./routes/timelineRoutes")
const memoryRoutes = require("./routes/memoryRoutes")
const personRoutes = require("./routes/personRoutes")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(timelineRoutes)
app.use(memoryRoutes)
app.use(personRoutes)

module.exports = app
