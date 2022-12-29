const address = document.getElementById('ip-address')
const geoLocation = document.getElementById('location')
const timeZone = document.getElementById('time-zone')
const isp = document.getElementById('isp')
const vpn = document.getElementById('vpn')
const ipInput = document.getElementById('ip-input')
const btn = document.getElementById('btn')
const map = document.getElementById('map')
const infoBox = document.querySelector('.info-box')


const getIpAddressInfo = () => {
  fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_GkeWx7tfCgBTKHFmBEnnupvaCcMCs&ipAddress=${ipInput.value}`)
.then(Response => Response.json())
.then(json => {
  address.textContent = json.ip
  geoLocation.textContent = `${json.location.country}, ${json.location.region}, ${json.location.city}`
  timeZone.textContent = json.location.timezone
  isp.textContent = json.isp
  vpn.textContent = json.proxy.vpn
  let lat = json.location.lat
  let lng = json.location.lng

  let map = L.map('map').setView(new L.LatLng(lat,lng), 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker(new L.LatLng(lat,lng)).addTo(map);
})
}
getIpAddressInfo()

btn.addEventListener('click', () => {
  getIpAddressInfo()
})

map.addEventListener('click', () => {
  map.style.zIndex = 4
})

window.onclick = (e) => {
  if (!e.target.matches('#map')) {
    map.style.zIndex = 1
  }
} 