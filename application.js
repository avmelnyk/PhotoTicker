var PhotoTicker= (function () {
  return {
  	getImages: function( callback) {
  			var xhr = new XMLHttpRequest();
  			var images = new Array();
  			xhr.open('GET','data.json', true);
        	xhr.setRequestHeader("Content-Type", "application/json");
  			xhr.send();
  			xhr.onreadystatechange = function() { // (3)
				  if (xhr.readyState != 4) return;
				  if (xhr.status != 200) {
				    alert(xhr.status + ': ' + xhr.statusText);
				  } else {
				    images = JSON.parse(xhr.responseText);
		          	return callback(images);
				  }

			}
  	},

    showImages: function (images) {
    	images.forEach(function(image_src){
    	 	var div = document.createElement("DIV");
    	 	div.className = "image_container";
    	 	var image = new Image();
    	 	div.appendChild(image);
    		image.src = image_src;
    		document.body.appendChild(div);
 });
    },
  };
})();

var images = PhotoTicker.getImages(PhotoTicker.showImages);
