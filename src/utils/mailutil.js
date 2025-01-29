const mailer  = require("nodemailer")


const sendingMail = async(to,subject,text)=>{

    const transporter = mailer.createTransport({
        service:"gmail",
        auth:{
            user:"pythonforsamir@gmail.com",
            pass:"frek lfzu mrsm srnv"
        }
    })
    const mailOptions  ={
        from:"pythonforsamir@gmail.com",
        to:to,
        subject:subject,
        //text:text,
        html:`<h1>${text}</h1>`
    }

    const mailInfo = await transporter.sendMail(mailOptions)
    console.log(mailInfo.messageId)


}
//sendingMail("samir.vithlani83955@gmail.com","test","test")
module.exports = sendingMail