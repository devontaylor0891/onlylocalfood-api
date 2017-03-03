var express = require('express');
var app = express();
var routes = require('./routes');

app.use('/api', routes);

app.listen(3000, function () {
  console.log("Application is listening at http://localhost:3000/api");
})
