function sixth(){
	$("#3").fadeToggle(8000);
	setTimeout(one,12000);
}
function fifth(){
	$("#1").fadeToggle();
	$("#3").fadeToggle(8000);
	setTimeout(fade4,12000);
	function fade4(){
		var hgt2 = 0;
		$("#2").animate({"height" : "toggle" , "display" : "initial", "opacity" : "toggle"},8000);
	}
	setTimeout(sixth,22000);
}
function fourth(){
	var hgt1 = $("#2").height();
	$("#2").animate({"height" : "toggle" , "display" : "none", "opacity" : "toggle"},8000);
	setTimeout(fade3,12000);
	function fade3(){
		$("#1").fadeToggle(8000);
		$("#3").fadeToggle(9000);
	}
	setTimeout(fifth,20000);
}
function third(){
	var wid2 = 0;
	$("#3").animate({"width" : "toggle" , "display" : "initial", "opacity" : "toggle"},8000);
	setTimeout(fade2,12000);
	function fade2(){
		$("#3").fadeToggle(8000);
		$("#1").fadeToggle();
	}
	setTimeout(fourth,24000);
}
function second(){
	$("#1").fadeToggle(8000);
	$("#2").fadeToggle(9000);
	setTimeout(third,12000);
}
function one(){
	var wid1 = $("#3").width();
	$("#3").animate({"width" : "toggle" , "display" : "none" , "opacity" : "toggle"},8000);
	setTimeout(fade1,10000);
	function fade1(){
		$("#2").fadeToggle(8000);
	}
	setTimeout(second,20000);
}
function imvarge(img_array){
	var img_div = document.body.appendChild(document.createElement("div"));
	img_div.setAttribute("id", "image");
	$("#image").css({"width":"100%","height":"100%"});
	img_div.style.width = img_array[3];
	img_div.style.height = img_array[4];
	for (var i = 0; i < img_array.length-2; i++) {
   		var img_tag = document.createElement("img");
   		img_tag.setAttribute("id",i+1);
   		img_tag.setAttribute("class","img");
   		img_tag.setAttribute("src", img_array[i]);
   		img_div.appendChild(img_tag);
	}
	$(".img").css({"margin-left":"auto","margin-right":"auto","display":"block","width":"inherit","height":"inherit","position":"absolute"});
	setTimeout(one,8000);
}
