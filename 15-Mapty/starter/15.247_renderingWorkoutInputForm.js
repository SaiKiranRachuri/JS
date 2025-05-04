// 1) Make the form class appear on click : 59
// 2) Cursor focus should be on distance input field for user experience :61
// 3) Handle form submit by an event listener : 74
// 4) Change input fields on updating dropdown : 100

'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let mapE, map;
if (navigator.geolocation) {
  // If condition to ensure browser's support of navigator API as it might not be on old browsers.
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      // console.log(position.coords);
      // console.log(position.coords.latitude, position.coords.longitude);

      const { latitude } = position.coords;
      const { longitude } = position.coords;
      // Build google maps url
      console.log(
        `https://www.google.co.in/maps/@${latitude},${longitude},12z?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D`
      );

      const coords = [latitude, longitude];
      //   const map = L.map('map').setView([51.505, -0.09], 13);
      map = L.map('map').setView(coords, 13);
      console.log(map);
      // The parameter 13 is a zoom value
      // L is a namespace like Intl that we used earlier

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // The tile styles can be changed by updating the other urls from Leaflet here.
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //   L.marker([51.5, -0.09])
      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
      // Direct code from library Leaflet

      map.on('click', function (mapEvent) {
        mapE = mapEvent;
        // console.log(mapEvent);
        ///// Unhide the Form
        form.classList.remove('hidden');
        ///// Cursor should appear on distance field
        inputDistance.focus();
      });
      // on is method from Leaflet browser API. A inherited method from other classes
    },
    function () {
      alert('Your location coordinates could not be fetched.');
      // works in a case of location access is denied.
    }
  );
}

console.log(firstName); // This is a global variable defined at other script but still has access to it because that script has been loaded before current script.

form.addEventListener('submit', function (e) {
  e.preventDefault();
  ///// Clearing input fields
  inputDistance.value =
    inputCadence.value =
    inputDuration.value =
    inputElevation.value =
      '';
  const { lat, lng } = mapE.latlng;
  console.log(lat, lng);
  // L.marker([lat, lng]).addTo(map).bindPopup('GYM').openPopup();
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 100,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('GYM')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row ').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row ').classList.toggle('form__row--hidden');
});
