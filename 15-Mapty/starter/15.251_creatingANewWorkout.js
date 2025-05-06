// Get data from form
// Check if data is valid
// If workout is running, creating running object
// If workout is cycling, create cycling object
// Render workout on map as marker
// Add the workout to list
// Hide the form and clear input fields

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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }

  calcSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

// const running = new Running([22, -19], 5, 120, 200);
// const cycling = new Cycling([22, -19], 5, 120, 200);
// console.log(running, cycling);

/////////////////////////////
// APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Your location coordinates could not be fetched.');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.co.in/maps/@${latitude},${longitude},12z?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D`
    );

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);
    // In a regular function call "this" keyword refers to undefined. So bind the object to the function: line 33

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row ').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row ').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validData = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const positiveNumbers = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // Check if data is valid

    // If workout is running, creating running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (!validData(distance, duration, cadence)) {
        alert('Not a number.');
      }
      if (!positiveNumbers(distance, duration, cadence)) {
        alert('Not a postive number.');
      }

      workout = new Running([lat, lng], distance, duration, cadence);
      console.log(workout);

      //   if (
      //     !Number.isFinite(distance) ||
      //     !Number.isFinite(duration) ||
      //     !Number.isFinite(cadence)
      //   ) {
      //     alert('Input numbers had to positive.');
      //   }
    }

    // If workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = inputElevation.value;
      if (!validData(distance, duration)) {
        alert('Not a number.');
      }
      if (!positiveNumbers(distance, duration)) {
        alert('Not a postive number.');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    this.#workouts.push(workout);

    // Render workout on map as marker
    this.renderWorkoutOnMap(workout);

    // Add the workout to list

    // Hide the form and clear input fields

    ///// Clearing input fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
  }
  renderWorkoutOnMap(workout) {
    console.log(workout.type);
    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 100,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type}`)
      .openPopup();
  }
}

const app = new App();
// app._getPosition(); Can be called in constructor to get position as soon as page is loaded
