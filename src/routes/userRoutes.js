const router = require("express").Router();
//role of router is to create routes, request handlers
const userController = require("../controllers/userController");
const validateUserRequest =require("../middleware/userMiddleware")
const validateUser  = require("../middleware/zodMiddleware")
const verifyUser = require("../middleware/verifyuser")
// router.get("/users",(req,res)=>{

// })

router.get("/users",verifyUser,userController.getUsers)
//router.get("/:id",userController.getUserById)
router.post("/user",validateUser,userController.addUser)
router.delete("/:id",userController.deleteUser)
router.post("/deletebyage",userController.deleteUserByAge)
router.post("/addusers",userController.addUsers)
router.put("/updateuser/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
router.get("/abcd",userController.checkJs)
router.get("/callapiauto",userController.callApiAuto)
module.exports = router
