const express = require('express');

// Validation of entries to schema
const { projectValidation } = require('../validation.js');

// Verification middleware used to check if verified auth-token exists
const verify = require('../verifyToken.js');

const createRouter = function(con, table) {
  const router = express.Router();

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

    let sql = (`SELECT * FROM ${table} WHERE id = ?`);
    let query = con.query(sql, id, (err, result) => {
      if(err) throw err;
      res.json(result[0]);
    });
  });

  // These routes will be protected routes



  // Add an entry to the database
  router.post('/add', verify, (req, res) => {

    // Validation of project details
    const { error } = projectValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const entry = req.body;
    let sql = `INSERT INTO ${table} SET ?`;
    let query = con.query(sql, entry, (err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });

  // Delete an entry from the database
  router.delete('/delete/:id', verify, (req, res) => {
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
