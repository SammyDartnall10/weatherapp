class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

paint(weather){
  this.location.textContent = weather.name;
  console.log(weather.name)
  this.desc.textContent = weather.weather[0].description;
  this.string.textContent = weather.main.temp;
  this.icon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
);
  this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
  this.feelsLike.textContent = `Feels Like : ${weather.main.feels_like}`;
  this.dewpoint.textContent = `Dewpoint: ${weather.main.pressure}`;
  this.wind.textContent = `Wind: ${weather.wind.speed}`;

}

}


// EXAMPLE DATA FROM API:

// const json = [
//   {
//     "coord":
//       {"lon":-0.13,
//       "lat":51.51},
//     "weather":[
//         {"id":800,
//         "main":"Clear",
//         "description":"clear sky",
//         "icon":"01n"}],
//     "base":"stations",
//     "main":
//       {"temp":280.66,
//       "feels_like":278.37,
//       "temp_min":277.59,
//       "temp_max":283.15,
//       "pressure":1025,
//       "humidity":93},
//     "visibility":10000,
//     "wind":
//       {"speed":2.1,
//       "deg":60},
//     "clouds":
//       {"all":1},
//     "dt":1588819889,
//     "sys":  
//       {"type":1,
//       "id":1414,
//       "country":"GB",
//       "sunrise":1588825252,
//       "sunset":1588879993},
//     "timezone":3600,
//     "id":2643743,
//     "name":"London",
//     "cod":200
//   }
// ]