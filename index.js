var express = require('express');
var app = express();
var routes = require('./routes');

app.use('/api', routes);

app.listen(8000, function () {
  console.log("Application is listening at http://localhost:8000/api");
})
