const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const dbConfig = require('./config');

//Import Routes
const createRouter = require('./helpers/create_router.js');
const authRoute = require('./helpers/auth.js');


app.use(express.json());
app.use(cors());


// Create a connection to the MySQL database using configuration from config file
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Connect to the database and create routes
con.connect((err) => {
  if(err) throw err;

  // We create routers for both coding and drawing projects
  const codingRouter = createRouter(con, 'coding');
  const drawingRouter = createRouter(con, 'drawing');

  // In production environment the app sits in a subdomain. A check is made for a
  // production environment URI. If one exists it is appended to the app routes
  if(process.env.base_uri){
    // Routes with base_uri appended
    app.use(process.env.base_uri + '/api/coding', codingRouter);
    app.use(process.env.base_uri + '/api/drawing', drawingRouter);
    app.use(process.env.base_uri + '/api/admin', authRoute);
  } else {
    // Routes without any base_uri
    app.use('/api/coding', codingRouter);
    app.use('/api/drawing', drawingRouter);
    app.use('/api/admin', authRoute);
  }
  console.log('MySQL Connected...');
});


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
