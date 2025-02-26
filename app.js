const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cron = require("node-cron");
const { Queue } = require("bullmq");
const Redis = require("ioredis");

//redis connection...
const redisConnection = new Redis({
  host: "127.0.0.1",
  port: 6379,
});
//console.log(redisConnection);

//queue..
const myQueue = new Queue("taskQueue", { connection: redisConnection });

app.post("/add-job", async (req, res) => {
  const { name, delay } = req.body;
  await myQueue.add("task", { name }, { delay: delay || 0 });
  res.json({ success: true, message: "Job Added for " + name });
});

const userRoutes = require("./src/routes/userRoutes");
const departmentRoutes = require("./src/routes/departmentRoutes");
const employeeRoutes = require("./src/routes/employeeRoutes");
const studentRoutes = require("./src/routes/studentRoutes");
const uploadRoutes = require("./src/routes/uploadRoutes");

//localhost:3000/users
//app.use(userRoutes)
//localhost:3000/user/users
app.use("/user", userRoutes);
app.use("/dept", departmentRoutes);
app.use("/emp", employeeRoutes);
app.use("/student", studentRoutes);
app.use("/upload", uploadRoutes);

// cron.schedule("* * * * *", () => {
//   console.log("called...");
// });

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
