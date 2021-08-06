const express = require('express');
const app = express();
const port = 3000;

var path = require('path');
var public = path.join(__dirname);
console.log(public);

app.use('/', express.static(public));

app.get('/:id', function (req, res) {
  res.sendFile(path.join(public, 'index.html'));
});
app.get('/', function (req, res) {
  res.send('');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));