$(document).ready(function(){
	console.log('ok');
	$.ajax({
		url: "/data",
		datatype: "json",
		success: function(data){
			var articles = data.blogs;
			for(i=0; i<articles.length; i++){
				$('#receiver')
				.append(articles[i].id+"<br>"+"<a href='/edit/"+articles[i].id+"'>"+articles[i].title+"</a>"+"<br>"+articles[i].content+"<br>");
			}
		},
		error: function(err){
			console.log(err);
		}
	});
	var sPageUrl =  window.location.href;

	console.log(sPageUrl.split('/'));
	$.ajax({
		url:"/data",
		success:function(data){
			console.log(data)
		}
	})
})