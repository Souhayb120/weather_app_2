const btn = document.getElementById('btn');
const city = document.getElementById('city');
const degree = document.getElementById('degree');
const statuss = document.getElementById('status');
const wind_km = document.getElementById('wind-km');
const humidty_ps = document.getElementById('humidty-ps');
const cityCountry = document.getElementById('cityCountry');
const img = document.getElementById('wheather');
const searchCity = document.getElementById('search_bar');


 async function getCityWeather(){
const cityFound = searchCity.value;
const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityFound}&appid=36ae07671208095b06a5bf6a19bc2e80&units=metric
`)
const data = await responce.json();
degree.innerText = data.main.temp;
statuss.innerText = data.weather[0].description;
wind_km.innerText = data.wind.speed + " km / h";
humidty_ps.innerText = data.main.humidity + "%";
cityCountry.innerText = data.name + "," + data.sys.country;
city.innerText = data.name;

switch (data.weather[0].description) {
    case 'broken clouds':
      img.src = "./images/animated/cloudy-night-1.svg"
        break;

    default:
        img.src = './images/animated/cloudy-night-1.svg'
        break;
}

}


