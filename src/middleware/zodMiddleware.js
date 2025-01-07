const userValidationSchema = require("../validation/userValidationSchema")

const validateUser = async(req,res,next)=>{


    try{
        userValidationSchema.parse(req.body)
        next()
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error:err
        })
    }

}
module.exports = validateUser