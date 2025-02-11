const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())


const userRoutes = require("./src/routes/userRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes")
const employeeRoutes = require("./src/routes/employeeRoutes")
const studentRoutes = require("./src/routes/studentRoutes")
const uploadRoutes = require("./src/routes/uploadRoutes")

//localhost:3000/users
//app.use(userRoutes)
//localhost:3000/user/users
app.use("/user", userRoutes);
app.use("/dept",departmentRoutes)
app.use("/emp",employeeRoutes)
app.use("/student",studentRoutes)
app.use("/upload",uploadRoutes)


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
