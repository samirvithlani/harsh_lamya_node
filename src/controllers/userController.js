const userSchema = require("../models/userModel");
const sendingMail = require("../utils/mailutil");

const getUsers = async (req, res) => {
  const users = await userSchema.find().populate("department");
  res.json({
    message: "users fetched",
    data: users,
  });
};

const getUserById = async (req, res) => {
  //const id = req.params.id
  const user = await userSchema.findById(req.params.id);
  if (user == null) {
    res.json({
      message: "user not found",
      data: null,
    });
  } else {
    res.json({
      message: "user found",
      data: user,
    });
  }
};

const addUser = async (req, res) => {
  //   const userObjFromBody = req.body;
  //   console.log(userObjFromBody);

  //email -->

  //const vaooo == awa --> db..

  try {
    const savedUser = await userSchema.create(req.body);
    //mail...
    await sendingMail(savedUser.email, "welcome mail", "welcome to our portal");
    res.json({
      message: "user saved successfully!",
      data: savedUser,
    });
  } catch (err) {
    res.json({
      message: "user not saved",
      data: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  //id
  const deletedUser = await userSchema.findByIdAndDelete(req.params.id);
  console.log(deletedUser);
  if (deletedUser == null) {
    res.status(404).json({
      message: "user not available",
    });
  } else {
    res.status(200).json({
      message: "user deleted successfully..",
      data: deletedUser,
    });
  }
};

const deleteUserByAge = async (req, res) => {
  const age = req.query.age;
  const flag = req.query.flag;
  console.log(flag);
  const users = await userSchema.deleteMany({ age: { $gte: age } });
  console.log(users);
  if (users.deletedCount > 0) {
    res.status(200).json({
      message: "users deleted with criteria",
    });
  } else {
    res.status(200).json({
      message: "no users found to delete with this criteria",
    });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  //id -->where
  //req.body = $set{}
  const updatedUser = await userSchema.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: "user updated",
    data: updatedUser,
  });
};

const addUsers = async (req, res) => {
  const users = await userSchema.insertMany(req.body);
  console.log(users);
  res.json("ok...");
};

//hobby must unique:
//remove
const addHobby = async (req, res) => {
  const id = req.params.id;
  const hobby = req.body.hobby;

  const updatedUser = await userSchema.findByIdAndUpdate(
    id,
    { $push: { hobbies: hobby } },
    { new: true }
  );
  res.status(200).json({
    message: "hobby added",
    data: updatedUser,
  });
};

//verfy -->GET -> json ->send -->string... -> consider as
const checkJs = async (req, res) => {
  res.send(`
    <h1>Email verified successfully!</h1>
    <p>You will be redirected to our website in a few seconds...</p>
    <script>
      setTimeout(() => {
        window.location.href = "http://localhost:3000/user/callapiauto?userName=samir"; // Replace with your success URL
      }, 2000); // Redirect after 2 seconds
    </script>
  `);
  //res.send("ok")
};

const callApiAuto = async (req, res) => {
  console.log("called...");
  const userName = req.query.userName;
  res.send(userName);
};
module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  deleteUserByAge,
  addUsers,
  updateUser,
  addHobby,
  checkJs,
  callApiAuto,
};
