// New school way of making an AJAX call is by using the fetch method which returns a promise: line 26
// Promise: A promise is an object, placholder for future result of an asynchronous operation

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 100000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
};

const getCountriesData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); // json is method available on all fetch promises as the response directly doesn't get countries data. It returns another promise.
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      const neighbours = data[0].borders[0];
      if (!neighbours) return;
      fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbours}`
      )
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'));
    });
};

getCountriesData('portugal');
