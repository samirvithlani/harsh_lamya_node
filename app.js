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
        userName:"ram",
        userAge:23
    },
    {
        userName:"shyam",
        userAge:24
    },
    {
        userName:"hari",
        userAge:25
    }
]


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


