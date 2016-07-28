/**
 * JavaScript Document
 * anthor：孙凯
 * date：2012-06-14
 */ 
 
window.onload = function() {	
	initMyTest();
}

function initMyTest() {
	/*
	var boxes = document.getElementsByTagName("div");
	for(var i=0; boxes.length; i++) {
		if(boxes[i].getAttribute("class")!="box") {
			break;
		}
		var id = boxes[i].getAttribute("id");
		var c = id.substr(0, id.length-3);
		addEvent(boxes[i], "mouseover", function(){
			setBodybgColor(c);
		});
	}
	*/
	var rb = document.getElementById("redbox");
	var gb = document.getElementById("greenbox");
	var bb = document.getElementById("bluebox");
	addEvent(rb, "mouseover", function(){
		setBodybgColor("red");
	});
	addEvent(gb, "mouseover", function(){
		setBodybgColor("green");
	});
	addEvent(bb, "mouseover", function(){
		setBodybgColor("blue");
	});
}

/**
 * 为对象添加事件
 */
function addEvent(obj,type,fun){
	//FF
	if(obj.addEventListener){
		obj.addEventListener(type, fun, true);
		return true;
	//旧版IE
	}else if(obj.attachEvent){
		return obj.attachEvent("on"+type, fun);
	}else{
		return false;
	}
}

function setBodybgColor(c) {
    var body = document.getElementsByTagName("body")[0];
    body.className = c;
}
