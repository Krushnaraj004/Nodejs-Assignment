var nodemailer = require('nodemailer');
require('dotenv').config();
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    }
});

var mailOptions = {
    from: 'Krushnaraj11@gmail.com',
    to: 'Yajvendrasinh@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy and simple!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});