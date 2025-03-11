const h1 = document.querySelector('h1');

//// TRAVERSING DOWNWARDS
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // Returns node list of child items under h1 items
// [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // Live HTML collection of elements
// [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//// TRAVERSING UPWARDS
console.log(h1.parentNode); // Returns parent element: bit similar to childNodes above
console.log(h1.parentElement); // Returns parent element

h1.closest('.header').style.background = 'var(--gradient-secondary)';
console.log(h1.closest('.header'));

console.log(h1.closest('h1'));

//// TRAVERSING SIDEWAYS
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
// To access all the siblings NOT just previous and next then use:
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (element) {
  if (element !== h1) {
    element.style.transform = 'scale(0.5)'; // Elements size get reduced
  }
});
