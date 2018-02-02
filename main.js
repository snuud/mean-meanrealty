require('./api/data/dbconnection.js');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./api/routes');

var port = process.env.PORT || 8080;
app.set('port', port);

app.use(bodyParser.json());

app.use('/api', routes);

var server = app.listen(app.get('port'), function(){
    var serverPort = server.address().port;
    console.log('Server running on port ' + serverPort);
});