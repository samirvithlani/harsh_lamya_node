const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Schema is a class

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  hobbies: [
    {
      type: String,
    },
  ],
  bloodGroup:{
    type:String,
    enum:["A+","B+","A-","B-"]

  }
});
// mongoose.model("users",userSchema) //users is the name of the collection in the db
// module.exports = userSchema
module.exports = mongoose.model("users", userSchema); //users is the name of the collection in the db
//db.users.find();
//userSchema.find();
