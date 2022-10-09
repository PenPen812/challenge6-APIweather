var APIKey = '50fab96ea22aedb450aa902a45727be1'
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;






var currentWeatherEl = $('#currentWeather');
    function currentResult(){
        currentResult.text(queryURL);
        var currentWeather=document.createElement('div');
        var cityName=document.createElement('h2');
        var temp=document.createElement('p');
        var wind=document.createElement('p');
        var humidity=document.createElement('p');
        currentWeather.setAttribute('class','currentWeather');
        cityName=setAttribute('class','cityName');
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

var historyCard=document.getElementById('history')


//Presented with city name, date, icon of weather, temperature, humidity, and wind speed
//list.weather.icon url: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
//city.name
//meta.lastupdate
//meta.nextupdate
//list.wind.speed

fetch(queryURL)
.then(function (weather) {
    if (weather.result) {
      console.log(city,date,icon,temp,wind,humidity);
      weather.json().then(function (data) {
        console.log(data);
        displayCity(city,date,icon,temp,wind,humidity);
      });
 
    var row=document.createElement('div')
    var hour=document.createElement('p')
    var textarea=document.createElement('textarea')
    var saveBtn=document.createElement('button')

    
      
//5-day forecast displays


//Click on search history to show current and future forecast