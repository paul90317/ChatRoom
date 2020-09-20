function fadd(food){
	arr.push(food);
}
var paul={
	name:"paul",
	say:function(s){
		document.write(s)
	}
}
var arr = ['apple','banana'];
fadd('orange');
arr.splice(1,1);
document.write(arr);
paul.say(" "+paul.name+"<p>");