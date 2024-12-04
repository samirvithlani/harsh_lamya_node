const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes");

//localhost:3000/users
//app.use(userRoutes)
//localhost:3000/user/users
app.use("/user", userRoutes);


//db connection
mongoose
  .connect("mongodb://127.0.0.1/harsh_lamya_node")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
