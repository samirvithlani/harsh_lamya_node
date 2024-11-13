// console.log("hello")
// const user = require("./user") //{}
// console.log(user)
// console.log(user.userName)
// console.log(user.age)
// user.getData()

const express = require("express")
const app = express()

//domain:port/test
//localhost ip
//127.0.0.0 :localhost
//localhost:3000/test
app.get("/test",(req,res)=>{
    //business logic..
    console.log("test api called")
    res.send("ok")
})
app.get("/user",(req,res)=>{

    const user = {
        userName:"ram",
        userAge:23
    }
    //res.json(user)
    res.json({
        message:"user fetched successfully",
        data:user
        })

})

var users = [
    {
        id:101,
        userName:"ram",
        userAge:23
    },
    {
        id:102,
        userName:"shyam",
        userAge:24
    },
    {
        id:103,
        userName:"hari",
        userAge:25
    }
]
app.get("/user/:id",(req,res)=>{


    //:id -->fetch
    const id = req.params.id;
    // console.log(req.params)
    // console.log(id)
    const foundUser = users.find((user)=>user.id == id)
    if(foundUser){
        res.json({
            message:"user fetched successfully",
            data:foundUser
        })
    }
    else{
        res.json({
            message:"user not found"
        })
    }


})






app.get("/users",(req,res)=>{

    res.json({
        message:"users fetched successfully",
        data:users
    })

})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


