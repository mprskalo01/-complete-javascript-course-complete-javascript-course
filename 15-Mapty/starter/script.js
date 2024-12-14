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

let map, mapEvent;

// Displaying a Map Using Leaflet Library
navigator.geolocation.getCurrentPosition(
  function (position) {
    // Geolocation API
    const { latitude, longitude } = position.coords;

    // console.log(latitude, longitude);

    const coords = [latitude, longitude];

    // Displaying a Map Using Leaflet Library
    map = L.map('map').setView(coords, 12);
    // console.log(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // L.marker(coords)
    //   .addTo(map)
    //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    //   .openPopup();

    // Displaying a Map Marker
    map.on('click', function (mapE) {
      mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  },
  function () {
    alert(`Could not get your position`);
  }
);

form.addEventListener('submit', e => {
  e.preventDefault();
  // Clear input fields
  inputDistance.value =
    inputCadence.value =
    inputDuration.value =
    inputElevation.value =
      '';
  // Display marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  console.log(lat, lng);
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', e => {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
