let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();
console.log(now.getHours());
console.log(now.getMinutes());
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `Today is ${date} ${day}, ${hours}:${minutes}`;

function formatDay(timestamp){
let date = new Date(timestamp * 1000);
let day = date.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  
  
  
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 7) {
    forecastHTML =
      forecastHTML +
      `
  
    <div class="col-2">
      <div class="weather-forecast-date">${formatDay(forecastDay.dt)}
      <div class="weather-forecast-temperatures">
        <span class="week-temperature">${Math.round(
          forecastDay.temp.day
        )}°C</span>
      </div>
    </div>
  </div>`;}
  });
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
console.log(forecastHTML);
}

function getForecast(coordinates){
  console.log(coordinates);
  let apiKey = "5863935ee9cca4c02ed68203f807c65b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayForecast);
}
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");
  let cityElement = document.querySelector("#city");

  celsiusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

      getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function displayCelsius(event) {
  event.preventDefault();
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function parisWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function kyivWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Kyiv";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function madridWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Madrid";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function berlinWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Berlin";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function londonWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function brusselsWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Brussels";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function budapestWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Budapest";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function tbilisiWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Tbilisi";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function romeWeather(event) {
  event.preventDefault();
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let city = "Rome";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
let parisElement = document.querySelector("#popcity1");
parisElement.addEventListener("click", parisWeather);

let kyivElement = document.querySelector("#popcity2");
kyivElement.addEventListener("click", kyivWeather);

let madridElement = document.querySelector("#popcity3");
madridElement.addEventListener("click", madridWeather);

let berlinElement = document.querySelector("#popcity4");
berlinElement.addEventListener("click", berlinWeather);

let londonElement = document.querySelector("#popcity5");
londonElement.addEventListener("click", londonWeather);

let brusselsElement = document.querySelector("#popcity6");
brusselsElement.addEventListener("click", brusselsWeather);

let budapestElement = document.querySelector("#popcity7");
budapestElement.addEventListener("click", budapestWeather);

let tbilisiElement = document.querySelector("#popcity8");
tbilisiElement.addEventListener("click", tbilisiWeather);

let romeElement = document.querySelector("#popcity9");
romeElement.addEventListener("click", romeWeather);

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayCelsius);

function handleGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "2c50f2cbf3eedd8d4d21b82ad8958183";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

let currentButton = document.querySelector("#location");
currentButton.addEventListener("click", handleGeolocation);

search("Cluny");

