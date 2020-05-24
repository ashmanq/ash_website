const express = require('express');

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
