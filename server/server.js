const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, '../client/build')));

// headers and content type
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());

app.get('/hello', function(req, res) {
  res.send({'ok': true});
});

app.post('/upload', function(req, res) {
  console.log('upload post request');
  res.send({'ok': true});
});

app.post('/namemappings', bodyParser.json(), function(req, res) {
  console.log(req.body);
  res.send({'ok': true});
});

app.post('/reset', function(req, res) {
  res.send({ok: true});
});

let server = app.listen(PORT, function() {
  console.log('Listening on port %s...', PORT);
});
