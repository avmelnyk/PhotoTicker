var PhotoTicker= (function () {
  return {
  	getImages: function() {
  			var xhr = new XMLHttpRequest();
  			xhr.open('GET','data.json', false);
        xhr.setRequestHeader("Content-Type", "application/json");
  			xhr.send();
  			if (xhr.status != 200) { 
  				alert( xhr.status + ': ' + 'Alarm'); 
			  } else {
          var images = JSON.parse(xhr.responseText);
          return images;
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

var images = PhotoTicker.getImages();
PhotoTicker.showImages(images);
