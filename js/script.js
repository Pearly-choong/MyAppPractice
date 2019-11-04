console.log('test');


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById('closeNav').addEventListener("click",function(){
  closeNav();
});

document.getElementById('openNav').addEventListener("click",function(){
  openNav();
});





function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.getElementById('openModal1').addEventListener('click',function(){
  openModal();
  currentSlide(1);
});

document.getElementById('openModal2').addEventListener('click',function(){
  openModal();
  currentSlide(2);
});

document.getElementById('openModal3').addEventListener('click',function(){
  openModal();
  currentSlide(3);
});

document.getElementById('openModal4').addEventListener('click',function(){
  openModal();
  currentSlide(4);
});

document.getElementById('closeModal').addEventListener('click',function(){
  closeModal();
});

document.getElementById('plusPrev').addEventListener('click',function(){
  plusSlides(-1);
});

document.getElementById('plusNext').addEventListener('click',function(){
  plusSlides(1);
});

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
