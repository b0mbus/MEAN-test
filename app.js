var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! trolololo');
});

var server = app.listen(3200, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
