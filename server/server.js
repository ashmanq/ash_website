const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const dbConfig = require('./config');
const createRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});


con.connect((err) => {
  if(err) throw err;
  // We create routers for both coding and drawing projects
  const codingRouter = createRouter(con, 'coding');
  const drawingRouter = createRouter(con, 'drawing');

  // We then allocate these routes to the express app
  app.use('/api/coding', codingRouter);
  app.use('/api/drawing', drawingRouter);

  console.log('MySQL Connected...');
});


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
})
