const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const sliderBtnLeft = document.querySelector('.slider__btn--left');

let currentSlide = 0;

const goToSlide = function (currentSlide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  );
};

goToSlide(0);
// First slide: 0%, 100%, 200%, 300%

slider.style.transform = 'scale(0.5)';
slider.style.overflow = 'visible';

const nextSlide = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

sliderBtnRight.addEventListener('click', nextSlide);

sliderBtnLeft.addEventListener('click', previousSlide);
