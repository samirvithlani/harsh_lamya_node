const validateUserRequest = async(req,res,next)=>{

    if(req.body.name){

        if(req.body.name.trim().length>0){
            console.log("valid...")
            next()
        }
        else{
            res.json({
                message:"name must have value*"
            })
        }
    }
    else{
        res.json({
            message:"name is required*"
        })
    }

}
module.exports =validateUserRequest