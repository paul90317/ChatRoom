function loginf(){
	const name = document.forms['login'].elements.name.value;
	window.location.assign("chat.html?"+name);
}
function sendf(myname,arr){
	const msg = document.forms['sendmsg'].elements.msg.value;
	arr.push(msg);
	document.forms['sendmsg'].elements.msg.value="";
	document.getElementById("chatblock").innerHTML="";
	for(i=0;i<arr.length;i++){
		document.getElementById("chatblock").innerHTML+= myname +": "+arr[i]+"<br/>";
	}
}