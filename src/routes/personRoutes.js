const express = require("express")
const router = express.Router()
const controller = require("../controller/personController")

router.post("/person", controller.create)
router.post("/person/login", controller.login)
router.get("/people", controller.getAll)
router.delete("/person/:id", controller.deleteById)

module.exports = router