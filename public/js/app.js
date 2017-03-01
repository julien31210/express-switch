$(document).ready(function(){
	console.log('ok');
	$.ajax({
		url: "/data",
		datatype: "json",
		success: function(data){
			var articles = data.blogs;
			for(i=0; i<articles.length; i++){
				$('#receiver')
				.append(articles[i].id+"<br>"+articles[i].title+"<br>"+articles[i].content+"<br>");
			}
		},
		error: function(err){
			console.log(err);
		}
	})
})