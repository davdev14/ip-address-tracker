



fetch('https://geo.ipify.org/api/v2/country?apiKey=at_GkeWx7tfCgBTKHFmBEnnupvaCcMCs&ipAddress=129.0.76.25')
.then(Response => Response.json())
.then(json => {
  console.log(json.location)
})




let map = L.map('map').setView([51.5, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('IP address located')
    .openPopup();