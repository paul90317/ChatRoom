function loginf(){
	const name = document.forms['login'].elements.name.value;
	window.location.assign("chat.html?"+name);
}
function sendf(myname){
	const msg = document.forms['sendmsg'].elements.msg.value;
	var fs = require('fs');
	var data = fs.readFileSync("123.txt","utf8");
	document.forms['sendmsg'].elements.msg.value="";
	data+=myname +": "+msg+"\n";
	fs.writeFile("123.txt",data);
	document.getElementById("chatblock").innerHTML=data.toString();
}