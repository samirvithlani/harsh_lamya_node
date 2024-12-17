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

    const savedUser = await userSchema.create(req.body)
    res.json({
        message:"user saved successfully!",
        data:savedUser
    })

      
};

module.exports = {
  getUsers,
  getUserById,
  addUser
};
