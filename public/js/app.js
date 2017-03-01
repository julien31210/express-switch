$(document).ready(function(){
	console.log('ok');
	$.ajax({
		url: "/data",
		datatype: "json",
		success: function(data){
			var articles = data.blogs;
			for(i=0; i<articles.length; i++){
				$('#receiver')
				.append(articles[i].id+"<hr>"+articles[i].title+"<hr>"+articles[i].content+"<hr>");
			}
		},
		error: function(err){
			console.log(err);
		}
	})
})