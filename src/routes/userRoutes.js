const router = require("express").Router();
//role of router is to create routes, request handlers
const userController = require("../controllers/userController");
// router.get("/users",(req,res)=>{

// })

router.get("/users",userController.getUsers)
router.get("/:id",userController.getUserById)
router.post("/user",userController.addUser)
router.delete("/:id",userController.deleteUser)
router.post("/deletebyage",userController.deleteUserByAge)
router.post("/addusers",userController.addUsers)
router.put("/updateuser/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
module.exports = router
