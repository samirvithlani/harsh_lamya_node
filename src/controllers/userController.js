const userSchema = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = await userSchema.find();
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

  const savedUser = await userSchema.create(req.body);
  res.json({
    message: "user saved successfully!",
    data: savedUser,
  });
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
  console.log(flag)
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

const addUsers = async(req,res)=>{

    const users = await userSchema.insertMany(req.body)
    console.log(users)
    res.json("ok...")


}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  deleteUserByAge,
  addUsers
};
