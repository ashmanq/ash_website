const mysql = require('mysql');
const dbConfig = require('./config');


// We get the query and params for the query
const mysqlRunner =( function(query, params) {
  // We initiate a promise for the asynch task of connecting to
  // the database
  return new Promise((resolve, reject) => {
    // We initiate response as null;
    let response = null;

    // We get the MySQL database details from the config file
    const con = mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.database
    });

    // We then send the query to the database and return the result
    con.connect((err) => {

      if(err) throw err;
      if(params){
        con.query(query, params, (err, res) => {
          if(err) throw err;
          resolve(res);
          con.end();
        });
      } else {
        con.query(query, (err, res) => {
          if(err) throw err;
          resolve(res);
          con.end();
        });
      };
    });
  })



});

module.exports = mysqlRunner;
