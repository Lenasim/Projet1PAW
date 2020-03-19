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
