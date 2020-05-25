const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const dbConfig = require('./config');
const createRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());


// Create a connection to the MySQL database using configuration from config file
const con = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
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
  } else {
    // Routes without any base_uri
    app.use('/api/coding', codingRouter);
    app.use('/api/drawing', drawingRouter);
  }
  console.log('MySQL Connected...');
});


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
