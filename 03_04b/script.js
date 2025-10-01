/**
 * Build a button to change units.
 * - Get the default unit type from settings.js.
 * - Create data for imperial and metric units.
 * - Create a button for switching between imperial and metric units.
 */

import settings from "../settings.js";
import weatherCard from "./components/weathercard.js";

const mainContent = document.querySelector(".main-content");
let units = settings.units;

async function displayData(units) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${settings.location}&appid=${settings.appid}`,
    {
      method: "GET"
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      mainContent.innerHTML = weatherCard(data, units);
    });
}

displayData(units);
