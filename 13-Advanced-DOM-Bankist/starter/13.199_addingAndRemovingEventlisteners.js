const h1 = document.querySelector('h1');
const alertH = function (e) {
  alert('You are reading the heading');
};
h1.addEventListener('mouseenter', alertH);

setTimeout(() => h1.removeEventListener('mouseenter', alertH), 3000);

// Another way of adding event listener
h1.onmouseenter = alertH; // Old school

// Another way is defining the event in html tag itself
