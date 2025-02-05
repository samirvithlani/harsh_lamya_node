const jwt = require("jsonwebtoken")
const secret ="royal"

const employeeModel = require("../models/employeeModel");

const verifyUser = async(req,res,next)=>{
    var token = req.headers.authorization;
    //Bearer token
    if(token){

        if(token.startsWith("Bearer ")){
        token = token.split(" ")[1]

        try{

            const user  = jwt.verify(token,secret);
            //console.log(user)
            const emp = await employeeModel.findById(user.id)
            console.log(emp)
            console.log(emp.name)
            //emp.role.name =="MANAGER"
            next()

        }catch(err){

            res.status(401).json({
                message:err
            })
        }
    }else{
        res.status(401).json({
            message:"only Bearer token is valid"
        })
    }


        
    }else{
        res.status(401).json({
            message:"please provide token"
        })
    }
}

module.exports = verifyUser