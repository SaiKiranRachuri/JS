// 404: the requested data is not found. Country is not present.
// 403: if the number of requests per second are high. Refreshing the browser multiple times to hit the API

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Reverse Geo coding
    const pos = await getPosition();
    let { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo) {
      throw new Error('Problem in getting the country.');
    }
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`
    );
    if (!res) {
      throw new Error('Problem in getting the country.');
    }
    //   fetch(
    //     `https://countries-api-836d.onrender.com/countries/name/${country}`
    //   ).then(res => console.log(res)); // fetch returns a promise and hanled by then method
    console.log(res); // res returns a promise
    const data = await res.json(); // extract data from body of res
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
  }
};
whereAmI();
console.log('Last line..');

// async keyword runs the function at background asynchronously. async and await are only about consuming promises
// await waits untill the promise is fullfilled.
// fullfilled promise is stored in a variable.
// async, await are the syntactic sugar over the then method.

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
