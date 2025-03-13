// const section1 = document.querySelector('#section--1');
// const callBack = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const viewPortOptions = {
//   root: null,
//   threshold: [0, 0.2], // Observer entry triggers at 0% intersection of section with viewport and 20% on both starting and ending of section1.
// };
// const observer = new IntersectionObserver(callBack, viewPortOptions);
// observer.observe(section1);
// // Once the section1 intersects with viewport the intersection observer records an entry

////// Better way of implementing sticky navigation using intersection observer API

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
// When the header is completely invisible on scroll then we add the header, so we observe the header here.

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry.isIntersecting); // header is not intersecting with viewport
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // To have the header visible even before intersection is false.
});
headerObserver.observe(header);
