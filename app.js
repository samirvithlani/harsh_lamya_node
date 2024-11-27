// console.log("hello")
// const user = require("./user") //{}
// console.log(user)
// console.log(user.userName)
// console.log(user.age)
// user.getData()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userSchema = require("./src/models/userModel");

//db connection
mongoose
  .connect("mongodb://127.0.0.1/harsh_lamya_node")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

//localhost:3000/users
app.get("/users", async (req, res) => {
  //db
  //db.users.find()
  const users = await userSchema.find();
  //res.send(users)
  res.json({
    data: users,
  });
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id; //:id
  //const foundUser = await userSchema.find({_id:id}) //array
  const foundUser = await userSchema.findById(req.params.id); //object
  console.log(foundUser);

  if (foundUser) {
    res.json({
      data: foundUser,
      message: "User found",
    });
  } else {
    res.json({
      message: "User not found",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
