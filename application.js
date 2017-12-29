var images = ["https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg",
"http://koshki-video.ru/wp-content/uploads/2016/10/C8NAYW-Z54omaxresdefault.jpg",
"http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg",
"http://funnycatvideos.net/extras/logo/funny-cat-videos-wide.jpg",
"https://www.thehappycatsite.com/wp-content/uploads/2017/11/funny3.jpg",
"https://4.bp.blogspot.com/-8lzg6HsXauA/WQorSje9zTI/AAAAAAABwYY/Ve5zHbKv2RAcuPyHZDEwFqN5sXR1_4Y-wCLcB/s1600/funny-cat-257-03.jpg",
"http://www.incarabia.com/wp-content/uploads/2016/09/cat-videos.jpg",
"https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg",
"https://i.pinimg.com/736x/99/22/73/992273e6e7e99816592ba56251d3ad0f--maine-coon-cats-funny-cats.jpg",
"https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg?quality=98&strip=all&w=782"];

 images.forEach(function(image_src){
 	var div = document.createElement("DIV");
 	var image = new Image();
 	div.appendChild(image);
	image.src = image_src;
	document.body.appendChild(div);
 });