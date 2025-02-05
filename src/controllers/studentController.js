const studentSchema = require("../models/studentModel")
const encrypt = require("../utils/encrypt")
const sendingMail = require("../utils/mailutil")
const jwt = require("jsonwebtoken")

const secret = "student"

const createStudent = async(req,res)=>{


    const hashedPassword = encrypt.encryptData(req.body.password)
    req.body.password = hashedPassword
    
    try{
    const savedStudent = await studentSchema.create(req.body)
    const token = jwt.sign(savedStudent.toObject(),secret)
    
    sendingMail(savedStudent.email,"welcome mail",`welcome to portal and your token = ${token}`)

    res.status(201).json({
        message:"student saved..."
    })
    }catch(err){
        res.status(501).json({
            message:"student not saved."
        })
    }

}

const verifyUser = async(req,res)=>{

    //verify...
    

}

module.exports = {
    createStudent
}