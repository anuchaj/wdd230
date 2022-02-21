// Filename windchill.js
function calculate_wind(temp, speed) {
    let wind_chill_calculate = 35.74 + (0.6215 * temp) - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16);
    return wind_chill_calculate;
}


temp = 30;
wind_speed = 5;
document.querySelector(".weather-degree").textContent = temp + " °C";

// check to see if the inputs meet the standard
if (temp <= 50 && wind_speed > 3) {
  wind_chill = calculate_wind(temp, wind_speed);
  document.querySelector("#wind-chill").textContent = wind_chill.toFixed(2) + " mph";
  
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}

