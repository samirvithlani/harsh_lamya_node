const router = require("express").Router()
const departmentController = require("../controllers/departmentController")
router.post("/",departmentController.addDepartment)
router.get("/",departmentController.getDepartments)
module.exports = router