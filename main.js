<<<<<<< HEAD
const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" current", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " current";
  setTimeout(showSlides, 1800); // Change image every 2 seconds
}
=======
const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" current", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " current";
  setTimeout(showSlides, 1800); // Change image every 2 seconds
}
>>>>>>> 6305228d6b1fd793c681dba65e09f0747df1d775
