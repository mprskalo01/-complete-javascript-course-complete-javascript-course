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
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

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
      // console.log(data[0])

      // Chaining Promises
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'sadasdasd';
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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // Throwing errors manually
    if (!response.ok) throw new Error(`Country not found (${response.status})`);

    return response.json();
  });
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
      // console.log(data[0])

      // Chaining Promises
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'sadasdasd';
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
/*
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
*/
// getCountryData('australia');

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=234603077809374688069x23692`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Unable to fetch geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err =>
      renderError(`Something went wrong 💥🧨💣 ${err.message}. Try again!`)
    );
};

whereAmI(52.508, 13.381);
*/

// Event loop theory lecture + in practice
/*
console.log('Test start'); // 1.
setTimeout(() => console.log('0 second timer'), 0); // 4.
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3.

Promise.resolve('Resolved promise 2').then(res => {
  ? Here the promise gets resolved instantly, but the microtask (the loop) gets put on the microtask queue which is pushed on the callstack and takes a long time, so the 0 second timer has to wait for the microtask to finish

  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end'); // 2.

? The first are the synchronous console logs, then promise because of microtasks queue priority and then the setTimeout callback last
*/

// Building a Simple Promise

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening 🔮`);

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));
// no need for reject, timer will never fail

wait(2)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
    return wait(1);
  });

// this is nested callback hell - triangle shape - above is avoiding callback hell

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

// creating a Promise that is resolved or rejected instantly

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('Problem!')).catch(err => console.error(err));
*/

// Promisifying the Geolocation API
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err.message)
    // );

    // automatically calling those functions
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=234603077809374688069x23692`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Unable to fetch geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err =>
      renderError(`Something went wrong 💥🧨💣 ${err.message}. Try again!`)
    );
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const imagesContainer = document.querySelector('.images');

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imagesContainer.insertAdjacentElement('beforeend', img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImg;

createImage('./img/img-1.jpg')
  .then(() => {
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    imagesContainer.firstChild.remove();
    return createImage('./img/img-2.jpg');
  })
  .then(() => {
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    imagesContainer.firstChild.remove();
    return createImage('./img/img-3.jpg');
  })
  .then(() => {
    console.log(`Image 3 loaded`);
    return wait(2);
  })
  .catch(err => console.error(err));

*/

// Consuming Promises with Async / Await
// and
// Error Handling With try...catch

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=234603077809374688069x23692`
    );

    const dataGeo = await resGeo.json();

    // Error for catching
    // dasdasda  // not defined

    // Country data

    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>console.log(res)
    // ) this is the old way

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    ); // this returns a promise ofc

    // Error for catching
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);
  } catch (error) {
    console.error(error);
    renderError(`💥 ${error.message}`);
  }
};

whereAmI();

// console.log('FIRST') // this is logged first because it's synchronous code

// Error Handling With try...catch

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

// Returning Values from Async Functions
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=234603077809374688069x23692`
    );

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error('Problem getting country');
    // asdasd;
    const data = await res.json();

    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error);
    renderError(`💥 ${error.message}`);

    // Reject promise returned from async function
    throw error;
  }
};

console.log('1: Will get location');

// const city = whereAmI();
// console.log(city); // returns a promise

// ? This is how we return values from async/await functions
// whereAmI()
//   .then(city => console.log(city))
//   .catch(error => console.error(`2: ${error.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// WITHOUT MIXING ASYNC/AWAIT WITH THEN...
(async () => {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (error) {
    console.error(`2: ${error.message}`);
  }
  console.log('3: Finished getting data');
})();

// console.log('3: Finished getting location');
*/

// Running Promises in Parallel
const get3Countries = async function (country1, country2, country3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country3}`
    // );

    // console.log([data1.capital, data2.capital, data3.capital]);

    // Combining multiple calls into one promise for efficency - they run at the same time
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`),
      getJSON(`https://restcountries.com/v3.1/name/${country3}`),
    ]);

    console.log(data.map(data => data[0].capital[0]));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('portugal', 'switzerland', 'austria');

// Other Promise Combinators: race, allSettled and any
