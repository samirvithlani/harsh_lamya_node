console.log("user file loaded..")
var userName = "amit"
var age = 23;
// module.exports = userName
// module.exports = age

const getData = () => {
    console.log("get data called..")
}

//module.exports = getData
module.exports = {
    userName,age,getData
}

// const express = ()=>{

// }
module.exports = express

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

//localhost:3000/users
// app.get("/users", async (req, res) => {
//   //db
//   //db.users.find()
//   const users = await userSchema.find();
//   //res.send(users)
//   res.json({
//     data: users,
//   });
// });

// app.get("/user/:id", async (req, res) => {
//   const id = req.params.id; //:id
//   //const foundUser = await userSchema.find({_id:id}) //array
//   const foundUser = await userSchema.findById(req.params.id); //object
//   console.log(foundUser);

//   if (foundUser) {
//     res.json({
//       data: foundUser,
//       message: "User found",
//     });
//   } else {
//     res.json({
//       message: "User not found",
//     });
//   }
// });
