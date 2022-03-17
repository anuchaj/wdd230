// Joseph Anucha

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&appid=a78ec261e24b796f729e2597d514690b";
/* const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=a78ec261e24b796f729e2597d514690b"; */

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#current-temp").textContent = jsObject.list[0].main.temp; // made it my own instead of just "jsObject.main.temp"
    console.log(jsObject);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    const desc = jsObject.list[0].weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });
