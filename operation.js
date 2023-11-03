const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'samiatadegbenro@gmail.com',
    pass: 'xqay zxig oyxg uaos'
  }
});

const mailOptions = {
  from: 'samiatadegbenro@gmail.com',
  to: 'oyindamolababalola8@gmail.com',
  subject: 'Sending Email using Node.js from samiat',
  text: 'learning node.js is fun! We are learning Node.js from profsain'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});