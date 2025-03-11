// Event Propagation: Event propagation is an event traversing from parent to child elements and traversing back to parent from child elements.
// It has 3 phases
// 1) Capturing phase
// 2) Target phase
// 3) Bubbling phase

// This Event Propagation exists for historical reasons due to different browser versions

// rgb(255, 255, 255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// max - min + 1 produces number of integers between the specified range: say 0, 3 then the range is 4 numbers
// + min is included to start the range from: 10 or 0 from below function call

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor);

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // this refers to current class
  // console.log('Target initiated from:', e.target);
  console.log('Child:', e.currentTarget);
  // console.log(this === e.currentTarget); // returns true

  // stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // this refers to current class
  // console.log('Target initiated from:', e.target);
  console.log('Parent:', e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    // this refers to current class
    // console.log('Target initiated from:', e.target);
    console.log('Ultimate parent:', e.currentTarget);
  }, true
  
); // To capture the target while traversing form capturing phase to target phase use true as parameter here.
   // Remove true to capture at bubbling phase. Default phase.