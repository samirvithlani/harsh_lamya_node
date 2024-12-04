const router = require("express").Router();
//role of router is to create routes, request handlers
const userController = require("../controllers/userController");
// router.get("/users",(req,res)=>{

// })

router.get("/users",userController.getUsers)
module.exports = router
