const router = require("express").Router()
const uploadController = require("../controllers/uploadController")
router.post("/upload",uploadController.uploadFile)
module.exports = router