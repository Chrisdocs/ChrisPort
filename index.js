const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();
const creds = require('./config.js');

var transport = {
    // host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    // port: 587,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'chriswolfe.dev@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from ', name,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)