// JavaScript Document

function puzhuce(){
	location.href="putongyonghuzhuce.jsp"
	
}
function houtai(){
	location.href="houtai.jsp"
}
function checkUN(){
	var userName=document.getElementById("un").value;
	if(userName==""){
		document.getElementById("s1").innerHTML="用户名不能为空！";
		document.getElementById("s1").style.color="red";
	}else{
		document.getElementById("s1").innerHTML="";
	}
}
/**
 * 验证密码
 */
function checkPS(){
	var userName=document.getElementById("pw").value;
	if(userName==""){
		document.getElementById("s2").innerHTML="密码不能为空！";
		document.getElementById("s2").style.color="red";
	}else{
		document.getElementById("s2").innerHTML="";
		}
}


