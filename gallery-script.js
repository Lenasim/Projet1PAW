/* header moving text */

const container = document.querySelector('.header-text');
const text = document.querySelector('.word');
const centerText = [container.offsetLeft, container.offsetTop];

window.addEventListener('mousemove', rotateText);

function rotateText(e) {
  const angleX = (e.pageX - centerText[0]) / 15;
  const angleY = (e.pageY - centerText[1]) / 10;

  text.style.transform = `
    rotateX(${angleY}deg) rotateY(${angleX}deg)
  `;

  text.style.textShadow = `
    ${angleX / 7}px ${angleY / 5}px 0px rgb(255, 0, 0, 0.1),
    ${angleX / 6}px ${angleY / 4}px 0px rgb(255, 0, 0, 0.1),
    ${angleX / 5}px ${angleY / 5}px 0px rgb(255, 0, 0, 0.1),
    ${angleX / 4}px ${angleY / 4}px 0px rgb(255, 0, 0, 0.1),
    ${angleX / 3}px ${angleY / 3}px 0px rgb(255, 0, 0, 0.1),
    ${angleX / 2}px ${angleY / 2}px 0px rgb(255, 0, 0, 0.1)
  `;

}


/* js modal gallery */

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
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


/* like button */
// add numbers
var add1 = function (id) {
  document.getElementById(id).value 
  = parseInt(document.getElementById(id).value, 10) + 1;
};


// thumbs up icon
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}



