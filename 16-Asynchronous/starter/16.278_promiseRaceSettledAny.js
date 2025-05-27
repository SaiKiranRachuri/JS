const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Promise.race(): Takes an array of inputs and returns an array with the promise that is won. A rejected promise can also win the race.
(async function () {
  const data = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/portugal`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  ]);
  //   console.log(data[0].capital);
  //   console.log(data);
})();

//Promise.allSettled(): takes an array of promises and retuns and array with all the promises be it fullfilled or rejected. Promise.all() short circuits if an unsettled promise is encountered.
(async function () {
  const data = await Promise.allSettled([
    getJSON(
      `https://countries-api-836d.onrender.com/countries/name/portugalss`
    ),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  ]);
  //   console.log(data[0].capital);
  console.log(data);
})();

//Promise.any(): takes an array of promises and retuns and array with a fullfilled promise. Unlike race also returns a rejected promise
