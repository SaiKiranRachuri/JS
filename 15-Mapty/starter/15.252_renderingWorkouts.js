// Render the workout name with details on marker

'use strict';

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

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    // this.type = "running";
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = 'cycling';
    this._setDescription();
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
  #mapZoomLevel = 13;

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);

    containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));
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

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
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
    e.preventDefault();
    const validData = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const positiveNumbers = (...inputs) => inputs.every(inp => inp > 0);

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
        return alert('Not a number.');
      }
      if (!positiveNumbers(distance, duration, cadence)) {
        return alert('Not a postive number.');
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
        return alert('Not a number.');
      }
      if (!positiveNumbers(distance, duration)) {
        return alert('Not a postive number.');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    this.#workouts.push(workout);
    console.log('Workout:', workout);

    // Render workout on map as marker
    this._renderWorkoutOnMap(workout);

    // Add the workout to list
    this._renderWorkout(workout);

    // Hide the form and clear input fields
    this._hideForm();
  }

  _hideForm() {
    ///// Clearing input fields
    inputCadence.value = inputDuration.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
    // Hide form and replace it with workout instead of having a animation of moving the workout on to form.
  }
  _renderWorkoutOnMap(workout) {
    console.log('Render workout on map:', workout);
    L.marker(workout.coords)
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
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            } </span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    if (workout.type === 'running') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.pace}</span>
            <span class="workout__unit">spm</span>
          </div>
          `;
    }
    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">m</span>
          </div>
          `;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopUp(e) {
    const workoutEl = e.target.closest('.workout');
    // Target is to know which workout is clicked.
    // Closest is where ever the click happend on the workout it finds the parent of it. (which is the li element)
    console.log(workoutEl);

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // Get the clicked workout object from workouts array.
    console.log(workout);

    if (!workoutEl) return;

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
}

const app = new App();
// app._getPosition(); Can be called in constructor to get position as soon as page is loaded
