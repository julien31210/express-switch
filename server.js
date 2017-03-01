// write you're code here Good Luck
var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser");
var fs = require('fs');
var linkjson = require("./data/blog.json");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/", function(req, res){
	res.sendFiles(path.join("/public/index.html"));
});

app.get("/data", function(req, res){
	res.send(linkjson);
});

app.post("/post", function(req, res){
	fs.readFile(linkjson, "utf8", function(err, data){
		if(err){
			throw err;
		}
		var dataparsed = JSON.parse(data);
		dataparsed.blogs.push(req.body);
	})
})

app.listen(1337, function(){
	console.log("coucou")
})
