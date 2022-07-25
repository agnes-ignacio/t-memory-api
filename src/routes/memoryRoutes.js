const controller = require("../controller/memoryController")
const express = require("express")

const router = express.Router()

router.get("/memories", controller.getAllMemories)
router.get("/memory/:id", controller.getMemoryById)
router.get("/memories/timeline/:id", controller.getMemoriesByTimeline)
router.get("/memories/category", controller.getMemoriesByCategory)
router.get("/public/memories", controller.getAllPublicMemories)
router.get("/public/memories/category", controller.getPublicMemoriesByCategory)
router.get("/public/memories/timeline/:id", controller.getPublicMemoriesByTimeline)
router.get("/public/memories/categoryandtimeline/:id", controller.getPublicMemoriesByCategoryAndTimeline)
router.get("/archived/memories/categoryandtimeline/:id", controller.getArchivedMemoriesByCategoryAndTimeline)
router.get("/archived/memories/category", controller.getArchivedMemoriesByCategory)
router.get("/archived/memories/timeline/:id", controller.getArchivedMemoriesByTimeline)
router.get("/archived/memories", controller.getAllArchivedMemories)
router.post("/memory", controller.createNewMemory)
router.patch("/memory/:id", controller.updateMemoryById)
router.patch("/archive/:id", controller.archiveMemoryById)
router.delete("/memory/:id", controller.deleteMemoryById)

module.exports = router