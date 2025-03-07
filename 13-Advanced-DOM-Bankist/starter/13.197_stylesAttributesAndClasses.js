const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for enhanced browsing. <button class = close-btn>Got it</button>';
const firstHeaderInPage = document.querySelector('.header');
firstHeaderInPage.prepend(message);
firstHeaderInPage.append(message);

/////// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// These 2 properties are added as inline style sheet

console.log(message.style.backgroundColor); // this returns color
console.log(message.style.height); // this returns empty because height is not a inline style sheet

// To access it use
console.log(getComputedStyle(message).height);

// Update literal of property
console.log(parseFloat(getComputedStyle(message).height) + 40 + 'px');

// Updating the below custom property from CSS file
// :root {
//     --color-primary: #5ec576;
//   }
// document.documentElement : is the root
document.documentElement.style.setProperty('--color-primary', 'orangered');

////// Accessing Standard attributes and non-standard attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // returns absolute url. To return relative url then use getAttribute method.
logo.alt = 'Updated alt attribute';
console.log(logo.alt);

// Non - standard
console.log(logo.test); // returns undefined
// To access
console.log(logo.getAttribute('test'));
// To set non-standard attribute
console.log(logo.setAttribute('test2', 'def'));
console.log(logo.getAttribute('test2'));

// DATA ATTRIBUTE
console.log(logo.dataset.versionNumber);

///// Classes
logo.classList.add('test1', 'test2');
logo.classList.remove('test1', 'test2');
logo.classList.toggle('test');
logo.classList.contains('test');
