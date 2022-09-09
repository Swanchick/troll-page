var urlIP = "https://api.ipify.org/"
var urlCity = "http://www.geoplugin.net/json.gp"

var ipItem = document.getElementById("ip")
var cityCountryItem = document.getElementById("country-city")

document.addEventListener("DOMContentLoaded", function(){
    fetch(urlIP)
    .then(res => res.text())
    .then(text => {
        document.title = text
        ipItem.innerHTML = text
    
    })
    
    fetch(urlCity)
    .then(res => res.json())
    .then(json => {
        cityCountryItem.innerHTML = `${json.geoplugin_city}, ${json.geoplugin_countryName}`
    })
})
