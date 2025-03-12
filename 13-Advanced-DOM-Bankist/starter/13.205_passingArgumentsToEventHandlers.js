const nav = document.querySelector('.nav');

const handleHover = function (e) {
  //   console.log(e.target.classList.contains('nav__link'));
  if (e.target.classList.contains('nav__link')) {
    const hoveredLink = e.target;

    // capturing current target

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
nav.addEventListener('mouseout', handleHover.bind(1));
