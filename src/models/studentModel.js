const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("students",studentSchema)