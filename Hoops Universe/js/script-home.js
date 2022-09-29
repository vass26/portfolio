var idx = 1;
slides(idx);

function pushSlides(a) {
  slides(idx += a);
}

function currSlide(a) {
  slides(idx = a);
}

function slides(a) {
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (a > slides.length) idx = 1  
  if (a < 1) idx = slides.length
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[idx-1].style.display = "block";  
  dots[idx-1].className += " active";
}

var idxx = 0;
slidess();

function slidess() {
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  idxx++;
  if (idxx > slides.length) {idxx = 1}    
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[idxx-1].style.display = "block";  
  dots[idxx-1].className += " active";
  setTimeout(slidess, 2500);
}