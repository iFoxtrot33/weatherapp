let weather = {
    'appKey': "90abf3cbdf5341565dfc1926d3562007",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.appKey)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
    }
}