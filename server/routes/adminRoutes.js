const express = require('express');
const authorisation = require('../authorisation')
const jwt = require('jsonwebtoken');

// Validation of entries to schema
const { loginValidation } = require('../validation.js');

// Verification middleware used to check if verified auth-token exists
const verify = require('../verifyToken.js');



// The router for all admin pages
const createRouter = function(con) {

  const router = express.Router();

  // Admin login route
  router.post('/login', async (req, res) => {

    // Validation of login details
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // We then check if the username exists in the database
    let sql = ("SELECT * FROM users WHERE username = ?");

    await con.query(sql, req.body.username, async (err, result) => {

      if(err) return res.status(400).send(err);

      // If we don't find a user matching the submitted username we return
      // a generic error
      if(!result.length) return res.status(401).send("Invalid username or password");

      // If a user is found we take the result and allocate it to foundUser
      const user = result[0];

      // Authorisation - We compare the received password with the hashed
      // password stored for the user on the database
      const authorised = await authorisation(req, user);
      if(!authorised) return res.status(401).send("Invalid username or password");

      // Create and assign a token we use the user id as part of the token
      const token = jwt.sign({id: user.id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)},
        process.env.TOKEN_SECRET);
      // If successfull in logging in we send back the token as 'auth-token'
      res.header('auth-token', token).send(token);

    });


  });

  return router;
};


module.exports = createRouter;
