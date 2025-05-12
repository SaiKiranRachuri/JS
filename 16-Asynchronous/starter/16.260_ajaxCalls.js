// There are 2 ways of making AJAX calls
// 1) Using XML HttpRequest: The old school way

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountriesData = function (country) {
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

    // const html = `test`;

    console.log(data.flags.png);
    console.log(data.name);
    console.log(countriesContainer);

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
  });
};

getCountriesData('portugal');
getCountriesData('usa');
getCountriesData('germany');
getCountriesData('ind');
// These are different AJAX calls excuted parallely and sometimes on reloading the browser may fetch the data in a order different than the above lines.
