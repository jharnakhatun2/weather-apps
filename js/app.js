//Do not show API key on your js FILE
const API_KEY = `23189cbc0e66b2190b1fe3db927b1f19`;

const loadTemperatures = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = temp => {
    const temperature = document.getElementById('wether-temp');
    // console.log(temp.name);
    temperature.innerText = temp.main.temp;
    const cityName = document.getElementById('city-name');
    cityName.innerText = temp.name;
}
loadTemperatures('jessore');
