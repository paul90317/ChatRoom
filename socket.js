var argv = location.href.split("?")[1];
var name = argv.split("&")[0];
var ip = "http://"+argv.split("&")[1]+":7777";
var socket = require('socket.io-client')(ip);
socket.emit("introduce",name);
socket.on("update",function(msgs){
	var str="";
	for(i=0;i<msgs.length;i++){
		str+=msgs[i]+"\n";
	}
	document.getElementById("chatblock").innerHTML=str;
})

speaker={
	say:function (myname){
		const msg = document.forms['sendmsg'].elements.msgbar.value;
		document.forms['sendmsg'].elements.msgbar.value="";
	/*var fs = require('fs');
	var data = fs.readFileSync("123.txt","utf8");
	document.forms['sendmsg'].elements.msg.value="";
	data+=myname +": "+msg+"\n";
	fs.writeFile("123.txt",data);
	document.getElementById("chatblock").innerHTML=data.toString();*/
		socket.emit("msg",myname,msg);
	}
}
