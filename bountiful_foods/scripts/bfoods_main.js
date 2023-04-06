function toggleMenu() {
    //console.log("It worked!");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// Weather information
function calculate_wind(temp, speed) {
    let wind_chill_calculate = 35.74 + (0.6215 * temp) - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16);
    return wind_chill_calculate;
}


/* const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&appid=a78ec261e24b796f729e2597d514690b"; */
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&cnt=3&appid=a78ec261e24b796f729e2597d514690b"; // Celcius
//"https://api.openweathermap.org/data/2.5/forecast?q=Aba&units=metric&cnt=3&appid=a78ec261e24b796f729e2597d514690b";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // document.querySelector(".current-temp").textContent = jsObject.list[0].main.temp; // made it my own instead of just "jsObject.main.temp"
    console.log(jsObject);

    const wind_speed1 = jsObject.list[0].wind.speed;
    const wind_speed2 = jsObject.list[1].wind.speed;
    const wind_speed3 = jsObject.list[2].wind.speed;
    const temp1 = jsObject.list[0].main.temp;
    const temp2 = jsObject.list[1].main.temp;
    const temp3 = jsObject.list[2].main.temp;
    let roundTemp1 = Math.round(temp1);
    let roundTemp2 = Math.round(temp2);
    let roundTemp3 = Math.round(temp3);

    document.querySelector(".windSpeed1").textContent = wind_speed1.toFixed(1) + " kph";
    document.querySelector(".windSpeed2").textContent = wind_speed2.toFixed(1) + " kph";
    document.querySelector(".windSpeed3").textContent = wind_speed3.toFixed(1) + " kph";
    document.querySelector(".temp1").textContent = roundTemp1;
    document.querySelector(".temp2").textContent = roundTemp2;
    document.querySelector(".temp3").textContent = roundTemp3;

    // check to see if the inputs meet the standard
    if (temp1 <= 50 && wind_speed1 > 3 && temp2 <= 50 && temp3 <= 50) {
      wind_chill_1 = calculate_wind(temp1, wind_speed1);
      wind_chill_2 = calculate_wind(temp2, wind_speed2);
      wind_chill_3 = calculate_wind(temp3, wind_speed3);
      document.querySelector(".windChill_1").textContent = wind_chill_1.toFixed(1) + " mph";
      document.querySelector(".windChill_2").textContent = wind_chill_2.toFixed(1) + " mph";
      document.querySelector(".windChill_3").textContent = wind_chill_3.toFixed(1) + " mph";
    
    } else {
        document.querySelector(".windChill_1").textContent = "N/A";
        document.querySelector(".windChill_2").textContent = "N/A";
        document.querySelector(".windChill_3").textContent = "N/A";
    }

    const iconsrc_1 = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    const iconsrc_2 = `https://openweathermap.org/img/w/${jsObject.list[1].weather[0].icon}.png`;
    const iconsrc_3 = `https://openweathermap.org/img/w/${jsObject.list[2].weather[0].icon}.png`;
    const desc1 = jsObject.list[0].weather[0].description;
    const desc2 = jsObject.list[1].weather[0].description;
    const desc3 = jsObject.list[2].weather[0].description;
    document.querySelector("#weathericon_1").setAttribute("src", iconsrc_1);
    document.querySelector("#weathericon_2").setAttribute("src", iconsrc_2);
    document.querySelector("#weathericon_3").setAttribute("src", iconsrc_3);
    document.querySelector("#weathericon_1").setAttribute("alt", desc1);
    document.querySelector("#weathericon_2").setAttribute("alt", desc2);
    document.querySelector("#weathericon_3").setAttribute("alt", desc3);
    document.querySelector(".description1").textContent = desc1.toUpperCase();
    document.querySelector(".description2").textContent = desc2.toUpperCase();
    document.querySelector(".description3").textContent = desc3.toUpperCase();
        
  });


