function loginf(){
	const name = document.forms['login'].elements.name.value;
	alert("wellcome "+name+"!");
	window.location.assign("char.html?"+name);
}