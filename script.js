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
    ${angleX/7}px ${angleY/5}px 0px rgb(255, 0, 0, 0.1),
    ${angleX/6}px ${angleY/4}px 0px rgb(255, 0, 0, 0.1),
    ${angleX/5}px ${angleY/5}px 0px rgb(255, 0, 0, 0.1),
    ${angleX/4}px ${angleY/4}px 0px rgb(255, 0, 0, 0.1),
    ${angleX/3}px ${angleY/3}px 0px rgb(255, 0, 0, 0.1),
    ${angleX/2}px ${angleY/2}px 0px rgb(255, 0, 0, 0.1)
  `;

}


/* dark mode */
function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

/* swift cards */
$(document).ready(function () {
	// Swiper: Slider
	new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1920: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			1028: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});
});







