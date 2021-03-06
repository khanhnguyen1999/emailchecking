const nodemailer = require('nodemailer');
async function send(to,subject,content){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: content,
      })
}
module.exports = {send};