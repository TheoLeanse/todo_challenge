var express = require("express");
var app = express();

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(8000, function() {
  console.log('server running on port 8000');
});
