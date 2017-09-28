var express = require('express');
var app = express();
var routes = require('./routes');
//var mysql = require('mysql');
//var env = require('node-env-file');
app.use('/api', routes);

app.listen(8081, function () {
  console.log("Application is listening at http://localhost:8081/api");
  /*
  env(__dirname + '/.env');
  var connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,  
  });

  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  });

  connection.query('USE DATABASE ebdb;', function (error, results) {});


  connection.query('describe test;', function (error, results) {
    console.log(results);
  });

  connection.end();
  
  
  a product has one producer

a product can have many deliver types/times

a deliver can have mutilple products
  
  
  
  
  
  
  
  */
});
