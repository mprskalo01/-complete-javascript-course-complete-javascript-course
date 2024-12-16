'use strict';
// https://restcountries.com/v3.1/all
// https://countries-api-836d.onrender.com/countries/
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}"/>
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} (mil) population</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// Asynchronous JavaScript, AJAX and APIs

// Our first AJAX Call : XMLHttpRequest
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.svg}"/>
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} (mil) population</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
*/

// Welcome to Callback Hell
/*
const getCountryAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    // AJAX call neighbour country (2)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      // Render neighbour country (2)
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');

// this is nested callback hell - triangle shape
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
*/

// Promises and the Fetch API

const country = 'croatia';

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// fetch API which returns a promise
// const request = fetch(`https://restcountries.com/v3.1/name/${country}`); // fetch returns a promise
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);

//       // We have to return response.json() which is another async function, on which we call another .then
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Consuming promises - Simplified version | Chaining Promises and Handling Rejected Promises
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      // Throwing errors manually
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      // Chaining Promises
      // const neighbour = data[0].borders?.[0];
      const neighbour = 'sadasdasd';
      if (!neighbour) return;

      // the return on this fetch makes the fulfilled value of this promise
      // we always want to return a promise and handle it using then outside of the callback function
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥🧨💣`);
      renderError(`Something went wrong 💥🧨💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      // finally gets called always - no matter if the promise is sucessful or failed, for example used for loading spinners
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('portugal');
});
*/

// Throwing errors manually

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // Throwing errors manually
    if (!response.ok) throw new Error(`Country not found (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      // Chaining Promises
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'sadasdasd';
      if (!neighbour) throw new Error(`No neighbour found`);

      // the return on this fetch makes the fulfilled value of this promise
      // we always want to return a promise and handle it using then outside of the callback function
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥🧨💣`);
      renderError(`Something went wrong 💥🧨💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      // finally gets called always - no matter if the promise is sucessful or failed, for example used for loading spinners
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('portugal');
});

// getCountryData('australia');
