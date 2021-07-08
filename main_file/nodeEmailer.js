var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Krushnaraj11@gmail.com',
        pass: 'BANNA@44'
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