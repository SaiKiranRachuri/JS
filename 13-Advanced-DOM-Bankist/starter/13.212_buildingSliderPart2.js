const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;

const goToSlide = function (currentSlide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  );
};

goToSlide(0);
// First slide: 0%, 100%, 200%, 300%

// Create dots
const createDots = function () {
  slides.forEach((_, index) =>
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class = "dots__dot" data-slide = ${index}></button>`
    )
  );
};
createDots();

const activateDot = function (currentSlide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide = "${currentSlide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

// slider.style.transform = 'scale(0.5)';
// slider.style.overflow = 'visible';

const nextSlide = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

sliderBtnRight.addEventListener('click', nextSlide);

sliderBtnLeft.addEventListener('click', previousSlide);

// Keyboard left and right arrows
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    previousSlide();
  }
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const currentSlide = e.target.dataset.slide;
    console.log(currentSlide);
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
});
