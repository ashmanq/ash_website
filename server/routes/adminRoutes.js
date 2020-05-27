const express = require('express');
const authorisation = require('../authorisation')
// Validation of entries to schema
// const Joi = require('@hapi/joi');
const { loginValidation } = require('../validation.js');

// The router for all admin pages
const createRouter = function(con) {

  const router = express.Router();

  // Admin login route
  router.post('/login', (req, res) => {

    // Validation of login details
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // We then check if the username exists in the database
    let sql = ("SELECT * FROM users WHERE username = ?");
    let query = con.query(sql, req.body.username, (err, result) => {
      if(err) res.status(401).send(err);

      // If we don't find a user matching the submitted username we return
      // a generic error
      if(!result.length) res.status(401).send("Invalid username or password");

      // If a user is found we take the result and allocate it to foundUser
      const foundUser = result[0];

      // Authorisation - We compare the received password with the hashed
      // password stored for the user on the database
      authorisation(req, foundUser)
      .then((result) => {
        if(result) {
          res.json("Success!");
        } else {
          res.status(401).send("Invalid username or password");
        }
      })
    });
  });

  // Get all entries in the database
  router.get('/', (req, res) => {
    con.query(`SELECT * FROM ${table}`, function(err, result) {
      if(err) throw err;
      res.json(result);
    });
  });

  // Find an existing entry in the database using it's id
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    let sql = (`SELECT * FROM ${table} WHERE id = ?`);
    let query = con.query(sql, id, (err, result) => {
      if(err) throw err;
      res.json(result[0]);
    });
  });


  // Add an entry to the database
  router.post('/add', (req, res) => {
    const entry = req.body;
    let sql = `INSERT INTO ${table} SET ?`;
    let query = con.query(sql, entry, (err, result) => {
      if(err) throw err;
      res.json(result);
    });
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
