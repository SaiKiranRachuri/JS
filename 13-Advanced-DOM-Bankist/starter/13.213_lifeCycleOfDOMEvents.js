document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree loaded', e);
});
// This event is fired when HTML is parsed and DOM tree is loaded.
// This doesn't include sources and loading of images
// script attribute is places at the last in HTML

window.addEventListener('load', function (e) {
  console.log('Entire page is fully loaded: ', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = 'My custom message. Do you want to close it?';
  // However, the custom messages are not allowed now while closing the browser tab.
});
