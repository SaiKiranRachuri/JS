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
