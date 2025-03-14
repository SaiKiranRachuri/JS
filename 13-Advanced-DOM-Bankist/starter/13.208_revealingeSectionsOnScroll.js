const sections = document.querySelectorAll('.section');

const revealSections = function (entries, observer) {
  // console.log(entries); Array of entries of all observed 4 sections rightaway.
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  // false: won't reveal and skips function

  entry.target.classList.remove('section--hidden');
  // Revealing the target/current section

  observer.unobserve(entry.target);
  // doesn't create entries once the sections are revealed i.e., on scrolling back to top from bottom.
};

const viewPortOptions = {
  root: null,
  threshold: 0.15, // Reveal after 15% scroll into the section
};

const sectionsObserver = new IntersectionObserver(
  revealSections,
  viewPortOptions
);
sections.forEach(section => {
  sectionsObserver.observe(section);
  section.classList.add('section--hidden');
  // Unreveal in initial state
});
