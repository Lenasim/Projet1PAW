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