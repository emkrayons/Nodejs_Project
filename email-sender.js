const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ngjggkk@gmail.com",
    pass: "lsze xejw yodb rbwe",
  },
});

const mailOptions = {
  from: "eek@gamil.com",
  to: "rhhrhjrj1@gmail.com",
  subject: "Sending Email using nodemailer",
  text: "That was easy",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent:" + info.response);
  }
});
