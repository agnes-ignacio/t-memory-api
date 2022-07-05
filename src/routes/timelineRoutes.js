const controller = require("../controller/timelineController")
const express = require("express")

const router = express.Router()

router.get("/timelines", controller.getAllTimelines)
router.get("/timeline/:id", controller.getTimelineById)
router.post("/timeline", controller.createNewTimeline)
router.patch("/timeline/:id", controller.updateTimelineById)
router.delete("/timeline/:id", controller.deleteTimelineById)

module.exports = router