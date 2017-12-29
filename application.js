 images.forEach(function(image_src){
 	var div = document.createElement("DIV");
 	div.className = "image_container";
 	var image = new Image();
 	div.appendChild(image);
	image.src = image_src;
	document.body.appendChild(div);
 });