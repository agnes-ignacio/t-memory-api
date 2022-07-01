const controller = require("../controller/memoryController")
const express = require("express")

const router = express.Router()
/*
router.get("/memories", controller.getAllMemories)
router.get("/memory/:id", controller.getMemoryById)
router.get("/memories/timeline", controller.getMemoriesByTimeline)
router.get("/memories/category", controller.GetMemoriesByCategory)
router.get("/memories/archived", controller.GetAllArchivedMemories)
router.get("/memories/archived/category", controller.getArchivedMemoriesByCategory)
router.get("/memories/archived/timeline", controller.GetArchivedMemoriesByTimeline)
router.post("/memory", controller.createNewMemory)
router.patch("/memory/:id", controller.updateMemoryById)
router.patch("/archive/:id", controller.archiveMemoryById)
router.delete("/memory/:id", controller.deleteMemoryById)
*/
module.exports = router