var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
var routes = require('./routes/routehandler');

routes(app);
app.listen(port);
console.log("RESTful API server started on port: " + port);
