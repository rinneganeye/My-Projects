let search = document.getElementById("search");
let newContent = document.querySelector(".content");

search.addEventListener("click", function weather() {
  let city = document.getElementById("input").value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=5ae079a999afebf36a17072e14d151f2"
  )
    .then((response) => response.json())
    .then((data) => {
      const { temp, humidity } = data.main;
      const {main, description } = data.weather[0];
      newContent.innerHTML = `
      <h2 class="city" style="margin-bottom: 0.6em;">Weather in ${data.name}, ${data.sys.country}</h2>
            <h4 class="temprature" style="font-size: 2.5em">${temp} °C</h4>
            <h4 class="description">${main} / ${description}</h4>
            <h4 class="humidity" style="margin-top: 0.6em;">Humidity: ${humidity}%</h4>
            <h4 class="windspeed">Wind Speed: ${data.wind.speed} kmph</h4>
      `;
    });
});
