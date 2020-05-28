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

      // Create and assign a token
      const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
      res.header('auth-token', token).send(token);

      // res.json("Logged In!")
    });


  });

  // // Get all entries in the database
  // router.get('/', (req, res) => {
  //   con.query(`SELECT * FROM ${table}`, function(err, result) {
  //     if(err) throw err;
  //     res.json(result);
  //   });
  // });
  //
  // // Find an existing entry in the database using it's id
  // router.get('/:id', (req, res) => {
  //   const id = req.params.id;
  //   console.log(id);
  //   let sql = (`SELECT * FROM ${table} WHERE id = ?`);
  //   let query = con.query(sql, id, (err, result) => {
  //     if(err) throw err;
  //     res.json(result[0]);
  //   });
  // });


  // Add an entry to the database
  router.post('/add', verify, (req, res) => {
    res.send("You made it boss!");
    // const entry = req.body;
    // let sql = `INSERT INTO ${table} SET ?`;
    // let query = con.query(sql, entry, (err, result) => {
    //   if(err) throw err;
    //   res.json(result);
    // });
  });

  // Delete an entry from the database
  router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    let sql = `DELETE FROM ${table} WHERE id = ?`;
    let query = con.query(sql, id, (err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });

  return router;
};


module.exports = createRouter;
