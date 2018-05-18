var mysql = require('mysql');

var env = require('node-env-file');

console.log("------------------");
console.log("process.env.", process.env);
console.log('----------------------');
env(__dirname + '/.env');
console.log("------------------");
console.log("os.environ['RDS_HOSTNAME']", os.environ['RDS_HOSTNAME']);
console.log("os.environ['RDS_USERNAME']", os.environ['RDS_USERNAME']);
console.log("os.environ['RDS_PASSWORD']", os.environ['RDS_PASSWORD']);
console.log("os.environ['RDS_PORT']", os.environ['RDS_PORT']);
console.log('----------------------');
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


module.exports = connection;