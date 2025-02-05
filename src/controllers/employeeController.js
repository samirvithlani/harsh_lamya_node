const employeeSchema = require("../models/employeeModel")
const encrypt = require("../utils/encrypt")
const jwt = require("jsonwebtoken")
const secret ="royal"

const createEmployee = async(req,res)=>{

    const {name,email,password} = req.body;

    const hashedPassword = encrypt.encryptData(password)
    const savedEmployee = await employeeSchema.create({name,email,password:hashedPassword})
    res.status(201).json({
        message:"employee created",
        data:savedEmployee

    })
}

const loginEmployee = async(req,res)=>{

    
    const {email,password} = req.body;
    const foundEmpFromEmail  = await employeeSchema.findOne({email:email})
    //email: obejct {password:encrtptf}
    if(foundEmpFromEmail){
        const isMatch = encrypt.compareData(password,foundEmpFromEmail.password)
        if(isMatch){

            //token...
            //const token = jwt.sign(foundEmpFromEmail.toObject(),secret)
            const token = jwt.sign({id:foundEmpFromEmail._id},secret)
            res.status(200).json({
                message:"user login successfully",
                //data:foundEmpFromEmail
                token:token
            })

        }
        else{
            res.status(401).json({
                message:"password not matched",
            })
        }
    }
    else{
        res.status(404).json({
            message:"user not found.."
        })
    }
    
    




}

module.exports = {
    createEmployee,
    loginEmployee
}