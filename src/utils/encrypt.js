const bcrypt = require("bcrypt")

const encryptData = (data)=>{

    const hashedString = bcrypt.hashSync(data,10)

    return hashedString;

}

const compareData = (data,hashedData)=>{

    return bcrypt.compareSync(data,hashedData)

}

module.exports={
    encryptData,
    compareData
}

