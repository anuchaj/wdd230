// Joseph Anucha

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//const iconsrc = document.querySelector('#icon-src');

// URL from OpenWeather
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=a78ec261e24b796f729e2597d514690b";
//const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&appid=a78ec261e24b796f729e2597d514690b";


// Asynchronous function that will use fetch() to request the given weather api url 
// and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else { // try block (to catch errors)
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;

  document.querySelector('#icon-src').textContent = iconsrc;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', captionDesc);
  captionDesc.textContent = desc;
}


apiFetch();
