const router = require("express").Router()
const studentController = require("../controllers/studentController")
router.post("/",studentController.createStudent)
module.exports = router