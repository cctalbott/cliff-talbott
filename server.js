var express = require('express');
var app = express();
var appdir = __dirname + '/app';

app.use('/app.css', express.static(appdir + '/app.css'));
app.use('/bower_components', express.static(appdir + '/bower_components'));
app.use('/cliff-talbott', express.static(appdir + '/cliff-talbott'));
app.use('/interviews', express.static(appdir + '/interviews'));
app.use('/images', express.static(appdir + '/images'));
app.use('/fonts', express.static(appdir + '/fonts'));
app.use('/styles', express.static(appdir + '/styles'));
app.use('/min', express.static(appdir + '/min'));

app.get('/', function(req, res) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/app/index.html');
});

var server = app.listen(process.env.PORT || 8000, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});