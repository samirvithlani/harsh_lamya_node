const userSchema = require("../models/userModel")

const getUsers = async(req,res)=>{

    const users = await userSchema.find();
    res.json({
        message:"users fetched",
        data:users
    })


}
module.exports = {
    getUsers
}