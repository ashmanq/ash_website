const dotenv = require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true
});

const sql = ` DROP TABLE IF EXISTS coding;
              DROP TABLE IF EXISTS drawing;
              CREATE TABLE coding (id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                type VARCHAR(255),
                details TEXT,
                date DATE,
                image VARCHAR(255),
                link VARCHAR(255)
              );
              CREATE TABLE drawing (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                details TEXT,
                type VARCHAR(255),
                date DATE,
                image VARCHAR(255),
                link VARCHAR(255)
              );`;

con.connect((err) => {
  if(err) throw err;
  console.log('MySQL Connected...');
  con.query(sql, (err, result) => {
    if(err) throw err;
    console.log('Table(s) created');
  })
  con.end();
});
