////////// SELECTORS

// Select entire html
console.log(document.documentElement); // Entire HTML is selected

// Select body
console.log(document.body);
// Select head
console.log(document.head);

// Select class header: first header on page
const firstHeaderInPage = document.querySelector('.header');
console.log(firstHeaderInPage);

// Select all: section class
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// Returns a nodelist with all sections

document.getElementById('section--1');

// getElementsByTagName and info about collections
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// Returns a live collection with all buttons. It is live collection because if a button from UI is deleted then collection is updated immediately.

const btnClasses = document.getElementsByClassName('btn');
console.log(btnClasses); // HTML collection

/////////// Creating and inserting Elements to DOM

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We use cookies for enhanced browsing";
message.innerHTML =
  'We use cookies for enhanced browsing. <button class = "btn-close"> Got it </button>';
firstHeaderInPage.prepend(message);
// prepend adds as first child of firstHeaderInPage element
// firstHeaderInPage.append(message); // adds as last child.
// as this a live DOM append overrides prepend message and i.e, why the message doesn't display both as first and last child.

// To have element at multiple places
// firstHeaderInPage.append(message.cloneNode(true));

// firstHeaderInPage.before(message);
firstHeaderInPage.after(message);

//////// DELETE ELEMENTS
document.querySelector('.btn-close').addEventListener('click', function () {
  message.remove();
});
