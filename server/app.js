const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

//Import Routes
const projectRoutes = require('./routes/projectRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const mailRoutes = require('./routes/mailRoutes.js');

// Middleware
app.use(express.json());
app.use(cors());


// Create a connection to the MySQL database using configuration from config file
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // Ensures dates are returned without timestamps
  dateStrings: 'date'
});

// Connect to the database and create routes
con.connect((err) => {
  if(err) throw err;

  // We create routers for both coding and art projects
  const codingRouter = projectRoutes(con, 'coding');
  const artRouter = projectRoutes(con, 'art');
  const adminRouter = adminRoutes(con);
  const mailRouter = mailRoutes();


  // In production environment the app sits in a subdomain. A check is made for a
  // production environment URI. If one exists it is appended to the app routes
  if(process.env.SUB_URI){
    // Routes with base_uri appended
    app.use(process.env.SUB_URI + '/api/coding', codingRouter);
    app.use(process.env.SUB_URI + '/api/art', artRouter);
    app.use(process.env.SUB_URI + '/api/admin', adminRoute);
  } else {
    // Routes without any base_uri
    app.use('/api/coding', codingRouter);
    app.use('/api/art', artRouter);
    app.use('/api/admin', adminRouter);
    app.use('/api/mail/send', mailRouter);
  }
  console.log('MySQL Connected...');
});


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
