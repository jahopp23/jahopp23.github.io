/* Lone Star Hard Money server.js */ 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send("<h1>Lone Star Hard Money Express App</h1>");
  })

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.listen(8000, function() { 
  console.log("listening on port 8000"); 
  })

app.get("/index", function(request, response){
  response.render('index', {title: 'Lone Star Hard Money Index Page'});
})


