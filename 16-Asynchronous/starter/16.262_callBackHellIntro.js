// In the AJAX calls made in a sequence the output produced is NOT in a sequence. To have those in sequence the JS has a techique of calls in a recursive fashion.

// There are 2 ways of making AJAX calls
// 1) Using XML HttpRequest: The old school way

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data) {
  const html = `<article class="country">
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

const getCountriesAndNeighbours = function (country) {
  const request = new XMLHttpRequest();
  // request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );

  request.send();

  // console.log(request.responseText);

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    // const data = JSON.parse(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // console.log(data.flags.png);
    // console.log(data.name);
    // console.log(countriesContainer);

    renderCountry(data);

    const [neighbours] = data.borders;
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbours}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2);
    });
  });
};

getCountriesAndNeighbours('portugal');

// These are different AJAX calls excuted parallely and sometimes on reloading the browser may fetch the data in a order different than the above lines.

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
