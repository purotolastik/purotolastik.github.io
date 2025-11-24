let index = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }

setInterval(nextSlide, 3500);

let startX = 0;
slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
slider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) nextSlide();
  if (endX > startX + 50) prevSlide();
});
