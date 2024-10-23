// console.log("hello")
// const user = require("./user") //{}
// console.log(user)
// console.log(user.userName)
// console.log(user.age)
// user.getData()

const express = require("express")
const app = express()

var users =[
    {
        id:1,
        name:"raj"
    },
    {
        id:2,
        name:"parth"
    }
]

//http:localhost:3000/test
app.get("/test",(req,res)=>{
    
    console.log("test api called..")
    res.send("api test...")
})
//htpp://localhost:3000/user
app.get("/user",(req,res)=>{

    var user = {id:1,name:"raj"}
    //res.json(user)
    res.json({message:"user data fetched",data:user})
    
})
app.get("/users",(req,res)=>{

    res.json({
        message:"all users fetched",
        data:users,
        flag:1
    })
    

})


const PORT = 3000
//server
app.listen(PORT,()=>{
    console.log("server started..",PORT)
})

