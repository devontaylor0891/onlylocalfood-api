var express = require('express');
var app = express();
var routes = require('./routes');
var hike = require('./src/handlers/tests');

app.use('/api', routes);
app.get('/hikes', hike.index);
app.post('/add_hike', hike.add_hike);

app.listen(8000, function () {
  console.log("Application is listening at http://localhost:8000/api");
})
