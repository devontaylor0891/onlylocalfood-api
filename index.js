var express = require('express');
var app = express();
var routes = require('./routes');
app.use('/api', routes);

app.listen(8081, function () {
  console.log("Application is listening at http://localhost:8081/api");
})
