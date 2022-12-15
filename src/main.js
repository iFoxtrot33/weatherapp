const weather = {
  appKey: '90abf3cbdf5341565dfc1926d3562007',
  fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
      city
    }&units=metric&appid=${
      this.appKey}`)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((err) => this.displayError(err));
  },
  displayWeather(data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.city').innerText = `Weather in ${name}`;
    // document.querySelector('body').style.background-image = `url(https://source.unsplash.com/1600x900/?${name})`;
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = `${temp}°C`;
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
    document.querySelector('.wind').innerText = `Wind speed: ${speed}km/h`;
    document.querySelector('.weather').classList.remove('loading');
    document.querySelector('.error').classList.remove('true');
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name}`;
  },
  search() {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
  displayError() {
    document.querySelector('.city').innerText = 'Please enter the city name correctly';
    document.querySelector('.error').classList.add('true');
  },
};

document.querySelector('.search button').addEventListener('click', () => {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    weather.search();
  }
});

weather.fetchWeather('batumi');
