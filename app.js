// Init UI
const ui = new UI();
// Init Storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //Change Location
  weather.changeLocation(city, state);

  // Get and disply weather
  storage.setLocationData(city, state);

  // Get and display weather 
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results)
  })
  .catch(err => console.log(err))
}