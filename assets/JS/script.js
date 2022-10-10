var weatherContainerEl = document.querySelector('#weather-container')
var historyCardEl = document.querySelector('#historyCard')
var forecastEl = document.querySelector('#forecast')
var weatherCardEl = document.querySelector('#weatherCard')
var cityNameEl = document.querySelector('#cityName')

var city;
var currentWeatherEl = $('#currentWeather');
    
function currentResult(){
        currentResult.text(queryURL);
        var currentWeather=document.createElement('div');
        var temp=document.createElement('p');
        var wind=document.createElement('p');
        var humidity=document.createElement('p');
        currentWeather.setAttribute('class','currentWeather');
        temp=setAttribute('class','temp');
        wind=setAttribute('class','wind');
        humidity=setAttribute('class','humidity');
        currentWeather.append(cityName);
        currentWeather.append(temp);
        currentWeather.append(wind);
        currentWeather.append(humidity);
    }

currentResult();

//Search history
var historyCard=document.createElement('div');
var historyRec=document.createElement('button');
historyCard.setAttribute('id','historyCard');
historyRec.setAttribute('class','historyRec');
historyCard.append(historyRec);

let city = 'length';
localStorage[city] =10
for (let i=0; i<localStorage.length; i++){
    let city = localStorage.city(i);
alert(`${city}: ${localStorage.getItem("city")}`);
}

var historyCard=document.getElementById('historyCard')


//Presented with city name, date, icon of weather, temperature, humidity, and wind speed
//list.weather.icon url: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
//city.name
//meta.lastupdate
//meta.nextupdate
//list.wind.speed
var getApiData = function(city){
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response) {
  if (response.result) {
    console.log(city, date, icon, temp, wind, humidity);
    response.json().then(function (data) {
      console.log(data);
      displayCityResult(city, date, icon, temp, wind, humidity);
    });
  } 

  var displayCityResult = function (city) {
    if  (city.length=0) {
    weatherContainerEl.textContent = 'No City found.';
      return;
  }
}
//5-day forecast displays


//Click on search history to show current and future forecast}
