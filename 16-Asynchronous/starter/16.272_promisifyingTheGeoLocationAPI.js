// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
// console.log('Getting position...'); // Executed first and then the call back API above

///// Promisifying the call back API to promise based API
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(res => {
//   console.log('Promisified Geo location:', res);
// });

const whereAmI = function () {
  getPosition()
    .then(res => {
      let { latitude: lat, longitude: lng } = res.coords;
      //   lat = 52.508;
      //   lng = 13.381;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(function (response) {
      //   console.log(response);
      if (!response.ok) {
        throw new Error(`Problem with Geocoding ${response.status}`);
      }
      return response.json(); // Retuns a new promise. And the then method below will get the data.
    })
    .then(function (data) {
      //   console.log(data);
      console.log(`You are in city ${data.city}, ${data.countryName}.`);

      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

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

btn.addEventListener('click', whereAmI);
