//Do not show API key on your js FILE
const API_KEY = `23189cbc0e66b2190b1fe3db927b1f19`;

const loadTemperatures = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    console.log(data.weather);
    // const temperature = document.getElementById('wether-temp');
    // temperature.innerText = data.main.temp;
    setInnerTextById('wether-temp', data.main.temp);
    // const cityName = document.getElementById('city-name');
    // cityName.innerText = data.name;
    setInnerTextById('city-name', data.name);
    // const weatherStatus = document.getElementById('weather');
    // weatherStatus.innerText = data.weather[0].main;
    setInnerTextById('weather', data.weather[0].main);

}

//Eventhandler setting in search button
// search input field value will be city cityName
document.getElementById('city-name-trigger').addEventListener('click', function(){
    const searchInput = document.getElementById('search-city-name');
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    loadTemperatures(searchInputValue);
});

// Common Function for setting inner tex
// text  = parameter.object;
//example(text = temp.main.temp;)
const setInnerTextById = (id,text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
loadTemperatures('dhaka');
