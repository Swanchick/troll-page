var url = "https://geolocation-db.com/json/"

var ipItem = document.getElementById("ip")
var cityCountryItem = document.getElementById("country-city")

document.addEventListener("DOMContentLoaded", function(){
    fetch(url)
    .then(res => res.json())
    .then(json => {
        document.title = json.IPv4
        ipItem.innerHTML = json.IPv4
        cityCountryItem.innerHTML = `${json.country_name}, ${json.city}`
    })
})
