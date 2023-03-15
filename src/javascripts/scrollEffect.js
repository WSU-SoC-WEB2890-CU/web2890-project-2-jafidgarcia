// horizonatal scroll for mobile too 
var gallery = document.getElementById("gallery");
var scrollPosition = 0;
var isTouchDevice = "ontouchstart" in document.documentElement;

if (isTouchDevice) {
  var touchStartX;
  var touchStartY;
  gallery.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  });
  gallery.addEventListener("touchmove", function(event) {
    var touchMoveX = event.touches[0].clientX;
    var touchMoveY = event.touches[0].clientY;
    var touchDeltaX = touchStartX - touchMoveX;
    var touchDeltaY = touchStartY - touchMoveY;
    if (Math.abs(touchDeltaX) > Math.abs(touchDeltaY)) {
      gallery.scrollLeft += touchDeltaX;
    }
    touchStartX = touchMoveX;
    touchStartY = touchMoveY;
    // event.preventDefault();
  });
} else {
  window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
      gallery.scrollLeft += 100;
    } else {
      gallery.scrollLeft -= 100;
    }
    // event.preventDefault();
  });
}

window.addEventListener("scroll", function() {
  var newScrollPosition = window.scrollY;
  // var scrollDelta = newScrollPosition - scrollPosition;
  scrollPosition = newScrollPosition;
  var galleryItems = gallery.getElementsByTagName("img");
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.transform = "translateX(" + (-scrollPosition) + "px)";
  }
});