function weatherBalloon(cityID) {
    var key = 'da055e0fdcebcdd212402b9b81768fab';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}

function drawWeather(d) {
    const celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    const fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('humidity').innerHTML = d.main.humidity + '%';
}

window.onload = function () {
    weatherBalloon(4945453)
}