var express = require('express');
var app = express();
const path = require("path");
var router = express.Router();
const viewpath = path.join(__dirname, './views/');

/*
app.use('/', router);
router.get('/', function (req, res) {
  res.sendFile(viewpath + 'index.html');
});
 router.get('/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'app.js'));
});
*/

app.use(`/`, express.static(viewpath));

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});