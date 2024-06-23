let slides = document.getElementsByClassName("image");
let currentSlide = 0;
slides[currentSlide].style.display = "block";

nextImage=function(){
  slides[currentSlide].style.display = "none";
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].style.display = "block";
}

setInterval(function() {
  nextImage();
  
}, 3500);

document.getElementById("previous").addEventListener("click", function () {
  slides[currentSlide].style.display = "none";
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].style.display = "block";
});

