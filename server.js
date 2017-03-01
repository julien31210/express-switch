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

app.post('/', function(req, res){
	var file = path.join(__dirname + '../data/blog.json')
	fs.readFile(file, 'utf8', function(err, data){
		if(err){
			console.log(err);
		}
		var doc = JSON.parse(data);
		doc.blog.push(req.body);
		var stringDoc = JSON.stringify(doc, null, 2);
		fs.writeFile(file, stringDoc, function(err){
			if(err){
				console.log(err);
			}
		});
});

	res.redirect('/');
});

app.listen(1337, function(){
	console.log("coucou")
})