//NASA Pic of the Day
//Fetch current pic of the day
//Apply data to variables

function telescope() {
    var key = 'SJPbb2kKYOld3vcCq27SnkroofPgmRZlPwMksJE6';
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawAstro(data);
        })
        .catch(function () {
            // catch any errors
        });
}

function drawAstro(d) {
    document.getElementById('date').innerHTML = d.date;
    document.getElementById('title').innerHTML = d.title;
    document.getElementById('explanation').innerHTML = d.explanation;
    document.getElementById('pic').innerHTML = d.hdurl;

}

function addimage(url) {
    var img = new Image();
    img.src = url;
    img_home.appendChild(img);
}

window.onload = function () {
    telescope();
    addimage(d.hdurl)
}