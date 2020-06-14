const express = require('express');
const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

// Validation of entries to schema
const { mailValidation } = require('../validation.js');

// Verification middleware used to check if verified auth-token exists
// const verify = require('../verifyToken.js');

const createRouter = function() {
  const router = express.Router();

  // Send Email
  router.post('/', (req, res) => {

    const { error } = mailValidation(req.body);
    if(error) return res.status(400).send({error: error.details[0].message});


    const message = `
      <p> You have a new message from AshQur.co.uk</p>
      <h3> Message Details </h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <p>Message: ${req.body.message}</p>
    `;
    recaptchaVerify(req.body.token)
    .then((response) => {
      console.log(response);
      if(response.success && response.score > 0.5) {
        mail(message, res).catch(console.error)
      } else {
        res.status(400).send({error: "Suspected bot activity!"});
      }
    });

  })

  // async..await is not allowed in global scope, must use a wrapper
  async function mail(message, res) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port:465,
      secure: true,
      auth: {
        type: "login",
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "Ashqur Website",
      to: "ashir@ashqur.co.uk",
      subject: "Message from AshQur.co.uk",
      html: message,
    }, (error, info) => {
      if(error) {
        res.status(400).send({error: "error"});
      } else {
        res.json({success: "Message sent successfully!"});
      }
    });
  }

  function recaptchaVerify(token) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`;
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  }

  return router;
};



module.exports = createRouter;
