'use strict';

//// Current lecture code at 66

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  // Prevents scrolling to the button on click
  // Property of href is on click it scrolls to the button
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///// SMOOTH scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  const sectionCoordinates = section1.getBoundingClientRect();
  console.log(sectionCoordinates); // Gives coordinates of section from view port

  console.log(e.target.getBoundingClientRect()); // Gives coordinates of button from view port

  console.log('Scroll coordinates (X/Y)', window.scrollX, window.scrollY);
  // Gives coordinates of how much is scrolled

  //   window.scrollTo({
  //     left: sectionCoordinates.left + window.scrollX,
  //     top: sectionCoordinates.top + window.scrollY,
  //     behavior: 'smooth',
  //   });
  // Scroll = section coords + scrolled distance

  section1.scrollIntoView({ behavior: 'smooth' });
  // Another way which works only on extreme modern browsers
});

// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (e) {
//     e.preventDefault(); // To prevent from auto navigation due to html code
//     const id = this.getAttribute('href');
//     // returns relative path
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// document.querySelectorAll returns an array of elements in header


////// Same handling using Event Delegation: Bubbling phase
// In above snippet we are attaching the event to each array element, however, that isn't a better approach which will degrade the performance incase of large volume of classes are present.
// It's like copying the function to each class
// Instead doing that we add the event listener to parent class

// 1) Add event listener to common parent
// 2) Determine where event is triggered
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav__link'))
  {
  // If button is clicked in between the links(menu) then it returns an error that id is null. 
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})
