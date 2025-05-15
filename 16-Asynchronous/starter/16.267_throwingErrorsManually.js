// Suppose if user tries to access a country that is not present in API then it returns fetch method returns an 404 status: line 37 the error is captured at catch method.(propagates and captured)

// However, if neighbouring country is not present then the error has to be handled at neighbouring fetch method when violates DRY.

// May be create a function for getJson() with url and message params

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
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  //   countriesContainer.style.opacity = 1; // To display the container
};

const getCountriesData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(
      function (response) {
        console.log(response);

        if (!response.ok) {
          throw new Error(`Country not found ${response.status}`);
        }
        return response.json(); // json is method available on all fetch promises as the response directly doesn't get countries data. It returns another promise.
      }
      //   err => alert(err)
    )
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
    })
    .catch(err => {
      //   alert(err);
      console.error(`${err}: No internet connection.`);
      renderError(`Something went wrong. ${err.message}. Please try again!`);
      // err is an Js object and message is a property
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountriesData('portugal');
});

getCountriesData('xifdf');
