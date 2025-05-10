// There are 2 ways of making AJAX calls
// 1) Using XML HttpRequest: The old school way

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');

request.send();

// console.log(request.responseText);

request.addEventListener('load', function () {
  //   console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
});
