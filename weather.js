class Weather {
  constructor(city, state) {
    this.apiKey ='504a84ee6c0fdb2a1df9119cb5a5cc37';
    this.city = city;
    this.state = state;
  }

// State is country

// Fetch the weather from API
async getWeather(){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)

const responseData = await response.json();

return responseData

}

// Change weather location
changeLocation(city, state){
  this.city = city;
  this.state = state;
}

}


// Default 
// 504a84ee6c0fdb2a1df9119cb5a5cc37

// URL for calls
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY

// Test

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=504a84ee6c0fdb2a1df9119cb5a5cc37