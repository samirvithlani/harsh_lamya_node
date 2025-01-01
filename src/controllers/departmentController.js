const departmentSchema = require("../models/departmentModel")

const addDepartment = async(req,res)=>{

    try{

        const savedDepartment = await departmentSchema.create(req.body)
        res.status(201).json({
            message:"department saved successfully !",
            data:savedDepartment
        })


    }catch(err){

        res.status(500).json({
            message:"internal server"
        })
    }


}

const getDepartments = async(req,res)=>{


    const departments = await departmentSchema.find()
    res.status(200).json({
        message:"dept fetched",
        data:departments
    })

}
module.exports = {
    addDepartment,
    getDepartments
}