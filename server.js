var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/static'));
//Store all JS and CSS in Scripts folder.
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Webpage at PORT 3000")