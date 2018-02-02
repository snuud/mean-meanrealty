var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.set('port', port);

var server = app.listen(app.get('port'), function(){
    var serverPort = server.address().port;
    console.log('Server running on port ' + serverPort);
});