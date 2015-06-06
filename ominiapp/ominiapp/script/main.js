$(document).ready(function(){
$("#home").show();

	

var obj={},pictures=[],title=[];
$.getJSON("script/data.json", function(result){
	for(t in result){
		console.log(result[t])
		for(var j=0;j<result[t].length;j++){
			pictures.push(result[t][j]["image"]);
		}
	}
	var n=Math.ceil((pictures.length-1)*Math.random())
	var pic=$('<div class=newpage1><img src="'+pictures[n]+'"></div>')
	$("#p1").append(pic);
	$("#p1 img").on("click",detail);
	


	for(var k=0;k<pictures.length;k++){
		var temp=$('<img src="'+pictures[k]+'" class="sliderclass">')
		$("#image-container").append(temp);
		$("#image-container img").on("click",detail);

}
	obj=result;
});
	
	$("#sel").on("change",category);
	$("#go").on("click",search);
	$("#page1 img")
	
	function category(){
		var s=$("#sel").val();
		$("#about").hide();
		$("#contact").hide();
		$("#plan").hide();
		$("#page3").empty();
		$("#page1").hide();
		$("#page2").show();
		$("#page2").empty()
		if(s==="all"){
			for(t in obj)
			for(var j=0;j<obj[t].length;j++){
				var i=$('<div class="new"><img src="'+obj[t][j]["image"]+'" <p>Author: "'+obj[t][j]["author"]+'"</p> <p>Rating: "'+obj[t][j]["rating"]+'"</p></div>')
				$("#page2").append(i);
			}
			var clear=("<div class='clear'></div>")
			$("#page2").append(clear);
		}
		else{
			var i="";
			for(var k=0;k<obj[s].length;k++){
		
				 i +='<div class="new"><img src="'+obj[s][k]["image"]+'"><p>Author: "'+obj[s][k]["author"]+'"</p> <p>Rating:"'+obj[s][k]["rating"]+'"</p></div>';
				}
		i +='<div class="clear"></div>'
		$("#page2").append(i);
				}
		$("#page2 img").on("click",detail)

	}

	function detail(){
		$("#about").hide();
		$("#contact").hide();
		$("#plan").hide();

		var source=$(this).clone();
		$("#page3").empty();
		var isrc=source.attr("src")
		var i,review="";
		for(t in obj){
			for(var k=0;k<obj[t].length;k++){
				if(obj[t][k]["image"]===isrc){
					 i=$('<div class="det-div"><img src="'+obj[t][k].image+'"></div><div class="det-div"><span>Title: "'+obj[t][k]["title"]+'"</span><p>Author: "'+obj[t][k]["author"]+'"</p><span>Description</span><p>"'+obj[t][k]["description"]+'"</p><span>Rating: </span>"'+obj[t][k]["rating"]+'"</div><div class="clear"></div><p class="reviewhead">Reviews</p>');
					 
					 for(var j=0;j<obj[t][k]["review"].length;j++){
					 	review +='<div class="revdiv">"'+obj[t][k]["review"][j]+'"</div>'
					 }
				}
			}
		}
		$("#page3").show();
		$("#page1").hide();
		$("#page2").hide();
		$("#page3").append(i);
		$("#page3").append(review);
		$("#about").hide();
		$("#contact").hide();
		$("#plan").hide
		}
		
		function search(){

			$("#about").hide();
			$("#contact").hide();
			$("#plan").hide();
			$("#page3").show();
			var f=false;
			var book=$("#find").val();
			$("#find").val("");
			for(t in obj){
				for(var j=0;j<obj[t].length;j++){

					if(book===obj[t][j]["title"]||book===obj[t][j]["author"]){
						$("#page3").empty();

						var review="";
					 	var i=$('<div class="det-div"><img src="'+obj[t][j].image+'"></div><div class="det-div"><span>Title: "'+obj[t][j]["title"]+'"</span><p>Author: "'+obj[t][j]["author"]+'"</p><span>Description</span><p>"'+obj[t][j]["description"]+'"</p><span>Rating: </span>"'+obj[t][j]["rating"]+'"</div><div class="clear"></div><p class="reviewhead">Reviews</p>');
					 
					 	for(var k=0;k<obj[t][j]["review"].length;k++){
					 	review +='<div class="revdiv">"'+obj[t][j]["review"][k]+'"</div>'
					 		}
				
			
						//var source=$('<img src="'+obj[t][j]["image"]+'">')
						//console.log(source)
						$("#page1").hide();
						$("#page2").hide();
						$("#page3").append(i);
						$("#page3").append(review);
						$("#about").hide();
						$("#contact").hide();
						$("#plan").hide();
						f=true;
						break;

					}
					if(f){
						break;
					}

				}
			}
		}

$("#logo").click(function(){
$("#home").show();
	$("#page1").show();
	$("#page2").hide();
	$("#page3").hide();

	$("#about").hide();
	$("#contact").hide();
	$("#plan").hide();


});
$(".home").click(function(){
	$("#home").show();
	$("#page1").show();
	$("#page2").hide();
	$("#page3").hide();

	$("#about").hide();
	$("#contact").hide();
	$("#plan").hide();
})
$(".about").click(function(){
	$("#home").hide();
	$("#about").show();
	$("#contact").hide();
	$("#plan").hide()
})

$(".contact").click(function(){
	$("#home").hide();
	$("#about").hide();
	$("#contact").show();
	$("#plan").hide()
})

$(".plan").click(function(){
	$("#home").hide();
	$("#about").hide();
	$("#contact").hide();
	$("#plan").show()
})
var m=0;
setInterval(function(){
	
	if(m<-2300){
		m=0;
	}
	var margin=m+"px"
	$("#image-container").css("margin-left",margin);
	m-=100;
		},1200);
});