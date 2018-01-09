var vk_url = 'vk.json';
var twitter_url = 'twitter.json';

var PhotoTicker = (function() {
    return {
        getImages: function(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function() {
                var images;
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) {
                    alert(xhr.status + ': ' + xhr.statusText);
                } else {
                    images = JSON.parse(xhr.responseText);
                    callback(images);
                }
            };
            xhr.send();
        },

        showImages: function(images) {
            images.forEach(function(image_src) {
                var div = document.createElement("DIV");
                div.className = "image_container";
                var image = new Image();
                image.onload = function() {
                    div.appendChild(image);
                };
                image.src = image_src;
                document.body.appendChild(div);
            });
        }
    };
})();

PhotoTicker.getImages(twitter_url, PhotoTicker.showImages);
PhotoTicker.getImages(vk_url, PhotoTicker.showImages);