var express = require('express');
var open = require('open');

var app = express();
var fs = require('fs');

app.use('/bower_components', express.static('bower_components'));
app.use('/app', express.static('app'));
app.use('/test', express.static('test'));

app.get('/', function (req, res) {    
  res.end(fs.readFileSync('index.html'));
});

app.get('/test', function (req, res) {    
  res.end(fs.readFileSync('test/spec/SpecRunner.html'));
});

app.listen(3000, function () {
  console.log('Running in por 3000!');
  open('http://localhost:3000/test');
  open('http://localhost:3000');  
});