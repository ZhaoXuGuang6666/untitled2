// JavaScript Document
function check(){
	if(document.getElementById("s1").innerHTML==""){
		return true;
		}
		return false;
	}
function xiugai(){
	location.href="guanlixiu.html"
}
function checkUN(){
	var userName=document.getElementById("un").value;
	if(userName==""){
		document.getElementById("s1").innerHTML="用户名不能为空！";
		document.getElementById("s1").style.color="red";
	}else{
		document.getElementById("s1").innerHTML="";
		}
		
		
		for(var i = 0;i<userName.length;i++){
			if(userName.charAt(i).toLowerCase()<'a'||userName.charAt(i).toLowerCase()>'z'){
			document.getElementById("s1").innerHTML="用户名必须有字母组成!";
			document.getElementById("s1").style.color="red";
			break;
		}
		
		document.getElementById("s1").innerHTML="";
}
}
	
function mySubmit(){
	 if(document.getElementById("s1").innerHTML==""){
		 	document.getElementById("f1").submit();
	
	}
	}
	function zhuxiao(){
	window.alert("注销成功");
	location.href="adminlogin.jsp"
}