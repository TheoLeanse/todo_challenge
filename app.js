var express = require("express");
var app = express();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(8000, function() {
  console.log('server running on port 8000');
});
