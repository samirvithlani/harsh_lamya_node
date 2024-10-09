console.log("user file loaded..")
var userName = "amit"
var age = 23;
// module.exports = userName
// module.exports = age

const getData = () => {
    console.log("get data called..")
}

//module.exports = getData
module.exports = {
    userName,age,getData
}