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
	fs.readFile("./data/blog.json", "utf8", function(err, data){
		if(err){
			throw err;
		}
		var dataparsed = JSON.parse(data);
		var len = dataparsed.blogs.length
		dataparsed.blogs.push({id: len + 1, title: req.body.title, content:req.body.content});
		var newarticle = JSON.stringify(dataparsed, null, 2);

		fs.writeFile("./data/blog.json", newarticle, function(err){
			console.log(err);
		})
	})
	res.redirect('/');

});

app.get("/edit/:id", function(req, res){
	res.sendFile(path.join(__dirname+"/public/edit.html"), {id: req.param.id});
})


app.listen(1337, function(){
	console.log("coucou")
})