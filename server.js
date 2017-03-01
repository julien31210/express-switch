// write you're code here Good Luck
var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/", function(req, res){
	res.sendFiles(path.join("/public/index.html"));
});

app.listen(1337, function(){
	console.log("coucou")
})
