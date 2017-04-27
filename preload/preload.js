window.onload = function() {
  var preloadImages;
  preloadImages = void 0;
  preloadImages = function(array) {
    var i, img, list;
    i = void 0;
    img = void 0;
    list = void 0;
    if (!preloadImages.list) {
      preloadImages.list = [];
    }
    list = preloadImages.list;
    i = 0;
    while (i < array.length) {
      img = new Image;
      img.onload = function() {
        var index;
        index = void 0;
        index = list.indexOf(this);
        if (index !== -1) {
          list.splice(index, 1);
        }
      };
      list.push(img);
      img.src = array[i];
      i++;
    }
  };
  preloadImages(['url1.jpg', 'url2.jpg', 'url3.jpg']);
};

/*wait */
window.onload = function() {
  var preloadImages;
  preloadImages = void 0;
  preloadImages = function(array, waitForOtherResources, timeout) {
    var imgs, list, loadNow, loaded, t, timer;
    imgs = void 0;
    list = void 0;
    loadNow = void 0;
    loaded = void 0;
    t = void 0;
    timer = void 0;
    loaded = false;
    list = preloadImages.list;
    imgs = array.slice(0);
    t = timeout || 15 * 1000;
    timer = void 0;
    loadNow = function() {
      var i, img;
      i = void 0;
      img = void 0;
      if (!loaded) {
        loaded = true;
        i = 0;
        while (i < imgs.length) {
          img = new Image;
          img.onload = img.onerror = img.onabort = function() {
            var index;
            index = void 0;
            index = list.indexOf(this);
            if (index !== -1) {
              list.splice(index, 1);
            }
          };
          list.push(img);
          img.src = imgs[i];
          i++;
        }
      }
    };
    if (!preloadImages.list) {
      preloadImages.list = [];
    }
    if (!waitForOtherResources || document.readyState === 'complete') {
      loadNow();
    } else {
      window.addEventListener('load', function() {
        clearTimeout(timer);
        loadNow();
      });
      timer = setTimeout(loadNow, t);
    }
  };
  preloadImages(['url1.jpg', 'url2.jpg', 'url3.jpg'], true);
  preloadImages(['url99.jpg', 'url98.jpg'], true);
};