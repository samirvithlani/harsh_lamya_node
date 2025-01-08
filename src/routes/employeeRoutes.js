const router = require("express").Router()
const employeeController = require("../controllers/employeeController")

router.post('/',employeeController.createEmployee)
router.post("/login",employeeController.loginEmployee)
module.exports = router