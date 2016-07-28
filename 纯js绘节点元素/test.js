window.onload = function(){
	createBackDIV();
	createMvDIV();
	startRun();
}

function Div(id, width, height, bdColor, bgColor) {
	var div = document.createElement("div");
	div.setAttribute("id",id);
	div.style.width = width;
	div.style.height = height;
	div.style.border = "1px solid "+bdColor;
	div.style.backgroundColor = bgColor;
	return div;
}

function createBackDIV(){
	var screenInfo = window.screen;
  var body = document.getElementsByTagName("body")[0];
	var div = new Div("bgDiv","600px", "400px", "#000000", "#FFFFFF");
	//æ”÷–
	div.style.position = "absolute";
	div.style.left = (screenInfo.width-parseInt(div.style.width))/2+"px";
	div.style.top = (screenInfo.height-parseInt(div.style.height))/2+"px";
	body.appendChild(div);
}

function createMvDIV(){
	var screenInfo = window.screen;
  var parentDiv = document.getElementById("bgDiv");
	var div = new Div("mvDiv", "50px", "50px", "#000000", "#0033FF");
	//æ”÷–
	div.style.position = "absolute";
	div.style.left = (parseInt(parentDiv.style.width)-parseInt(div.style.width))/2+"px";
	div.style.top = (parseInt(parentDiv.style.height)-parseInt(div.style.height))/2+"px";
	parentDiv.appendChild(div);
}

var x = 3;
var y = 3;

function startRun(){
	var mvDivL = parseInt(document.getElementById("mvDiv").style.left);
	var mvDivT = parseInt(document.getElementById("mvDiv").style.top);
	if(mvDivL<0 || mvDivL>(parseInt(document.getElementById("bgDiv").style.width)-parseInt(document.getElementById("mvDiv").style.width))) {
		x = -x;
	}
	if(mvDivT<0 || mvDivT>(parseInt(document.getElementById("bgDiv").style.height)-parseInt(document.getElementById("mvDiv").style.height))) {
		y = -y;
	}
	mvDivL = mvDivL+x;
	mvDivT = mvDivT+y;
	document.getElementById("mvDiv").style.left = mvDivL+"px";
	document.getElementById("mvDiv").style.top = mvDivT+"px";
	setTimeout("startRun()",50);
}
