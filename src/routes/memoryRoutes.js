const controller = require("../controller/memoryController")
const express = require("express")

const router = express.Router()

router.get("/memories", controller.getAllMemories)
router.get("/memory/:id", controller.getMemoryById)
router.get("/memories/timeline/:id", controller.getMemoriesByTimeline)
router.get("/memories/category", controller.getMemoriesByCategory)
router.get("/public/memories", controller.getAllPublicMemories)
router.get("/public/category", controller.getPublicMemoriesByCategory)
router.get("/public/timeline/:id", controller.getPublicMemoriesByTimeline)
router.get("/public/categoryandtimeline/:id", controller.getPublicMemoriesByCategoryAndTimeline)
router.get("/archived/categoryandtimeline/:id", controller.getArchivedMemoriesByCategoryAndTimeline)
router.get("/memories/archived/category", controller.getArchivedMemoriesByCategory)
router.get("/memories/archived/timeline/:id", controller.getArchivedMemoriesByTimeline)
router.get("/memories/archived", controller.getAllArchivedMemories)
router.post("/memory", controller.createNewMemory)
router.patch("/memory/:id", controller.updateMemoryById)
router.patch("/archive/:id", controller.archiveMemoryById)
router.delete("/memory/:id", controller.deleteMemoryById)

module.exports = router