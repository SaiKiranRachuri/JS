const nav = document.querySelector('.nav');

const handleHover = function (e) {
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    // If condition to prevent hover on other areas other than the links
    const hoveredLink = e.target;
    // console.log(hoveredLink);
    // capturing target

    // Select all siblings of hoveredLink to change opacity
    // Note: siblings list has hoveredLink as well
    const siblings = hoveredLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = hoveredLink.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== hoveredLink) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));
