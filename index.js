var urlIP = "https://api.ipify.org/"
var urlCity = "http://www.geoplugin.net/json.gp"

var ipItem = document.getElementById("ip")
var cityCountryItem = document.getElementById("country-city")

function getCityCountry(ip){
    let url = `${urlCity}?ip=${ip}`

    fetch(url)
    .then(res => res.json())
    .then(json => {
        cityCountryItem.innerHTML = `${json.geoplugin_city}, ${json.geoplugin_countryName}`
    })
}

function getIP(){
    fetch(urlIP)
    .then(res => res.text())
    .then(text => {
        document.title = text
        ipItem.innerHTML = text
        getCityCountry(text)
    })
}

document.addEventListener("DOMContentLoaded", function(){
    getIP()
})
