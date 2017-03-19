//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
app.get('/app', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/re2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/re2.html'));
});
app.get('/re3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/re3.html'));
});
app.get('/re4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/re4.html'));
});
app.get('/re5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/re5.html'));
app.get('/HOMEPAGE', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HOMEPAGE.html'));
});
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});