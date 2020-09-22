var http = require("http",function(req,res){
	/*res.setHeader('Content-Type','text/html')
	const fs=require('fs')
	const html=fs.readFileSync("index.html",'utf-8')
	res.write(html)
	console.log("login...")
	res.end("hello!");*/
}).createServer();
http.listen(3000,function(){
	console.log("server listen to http port 3000...")
});
var msgs = [];
var io = require("socket.io")(http)
io.on("connection",function(socket){
	let str = "someone join to chat room!";
	console.log(str);
	msgs.push(str+"<br/>");
	socket.emit("update",msgs);
	socket.on("msg",function(myname,msg){
		let str = myname+": "+msg;
		msgs.push(str+"<br/>")
		console.log(str)
		socket.emit("update",msgs);
	})
})

