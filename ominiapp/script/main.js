$(document).ready(function(){

	

var obj={},pictures=[];

$("#go").click(function(){
	alert("1");
$.getJSON("script/data.json", function(result){
	alert("2");
	var c=1;
	for(t in result){
alert("hi")
		for(var j=0;j<t.length;j++){
			alert("hi")
			$("#p1").empty();
			pictures.push(t[0]["image"]);
			$("#p1").append(t[0]["image"]);
		}
	}
	
	
obj=result;

console.log(obj);
	$("#sel").on("change",category)

	function category(){
console.log(obj);
	var s=$("#sel").val();
	$("#page1").hide();
	$("#page2").show();
	$("#page2").empty();
var i=$('<img src="'+obj[s][0].image+'"><img src="'+obj[s][1].image+'"><img src="'+obj[s][2].image+'"><img src="'+obj[s][3].image+'"><img src="'+obj[s][4].image+'">')
$("#page2").append(i);
$("#page2 img").on("click",detail)

}

function detail(){
	$("#page3").empty();
	var source=$(this).clone();
	console.log(source)
	$("#page1").hide();
	$("#page2").hide();
	

$("#page3").append(source);

}
	});
});

		
		    

	

});