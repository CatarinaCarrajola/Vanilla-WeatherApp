function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement = Math.round(response.data.wind.speed);
}

let apiKey = "43da0ce795180b550b43f6866a3bc1ab";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

//let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=3da0ce795180b550b43f6866a3bc1ab&units=metric;
