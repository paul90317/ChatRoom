var http = require("http",function(req,res){}).createServer();
var fs = require('fs')
var data = "";
	
http.listen(7777,function(){
	console.log("server listen to http port 7777...")
});
var msgs = [];
var io = require("socket.io")(http)
io.on("connection",function(socket){
	socket.on("introduce",function(name){
		console.log(name+" connect ...");
		msgs.push(name+" join to chat room!<br/>");
		io.emit("update",msgs);
		data += name+" connect ...\n";
		fs.writeFileSync("msglog.txt",data);
	})
	socket.on("msg",function(myname,msg){
		console.log(myname+" send: "+msg);
		msgs.push(myname+": "+msg+"<br/>")
		io.emit("update",msgs);
		data += myname+" send: "+msg+"\n";
		fs.writeFileSync("msglog.txt",data);
	})
})

