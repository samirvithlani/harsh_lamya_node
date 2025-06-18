const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const mongoose = require("mongoose");
app.use(express.json());
const cron = require("node-cron");
const { Queue } = require("bullmq");
const Redis = require("ioredis");

//redis connection...
const redisConnection = new Redis(
  "rediss://red-cujm3nt2ng1s73b92o1g:L7RB5dQeIHEPOURTniYt21LJscQBO2wO@oregon-keyvalue.render.com:6379",
  
)
// const redisConnection = new Redis({
//   host: "127.0.0.1", // or "localhost"
//   port: 6379,        // default Redis port
// })
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

const CACHE_EXPIRY = 600;

const cacheMiddleware = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const cacheData = await redisConnection.get(userId);
    if (cacheData) {
      console.log("cache hit");
      return res.json(JSON.parse(cacheData));
    }
    console.log("cache miss");
    next();
  } catch (err) {
    console.log("redis error", err);
    next();
  }
};

const fakeData = {
  1: { name: "John", age: 23 },
  2: { name: "Doe", age: 24 },
  3: { name: "Jane", age: 25 },
  4:{name:"Harsh",age:23},
  5:{name:"Lamya",age:25}
};

app.get("/user/:userId", cacheMiddleware, (req, res) => {
  const { userId } = req.params;
  const userData = fakeData[userId];
  redisConnection.setex(userId, CACHE_EXPIRY, JSON.stringify(userData));
  return res.json(userData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
