// LAB 1
let metroManila = [14.52,121.10]; // #1 MNL latlng
let map = L.map('map').setView(metroManila, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// LAB 2
// let locMarker = L.marker([14.6539761,121.0666786]);
// locMarker.addTo(map);
// locMarker.bindPopup("<p>University of the Philippines</p>");
// locMarker.addEventListener('click', function(){
//     alert("School");
// })
// let circle = L.circle([14.6539761,121.0666786], {
//     color: 'red',
//     fillColor:"orange",
//     fillOpacity:0.5,
//     radius: 100
// })

// add it to the map
// circle.addTo(map);

// LAB 3
// the map argument refers to the map which we create using Leaflet
function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}

// create marker cluster
let markerClusterLayer = L.markerClusterGroup();

for (let i = 0; i < 1000; i++) {
    let pos = getRandomLatLng(map);
    L.marker(pos).addTo(markerClusterLayer);
}

markerClusterLayer.addTo(map);

// Practical
window.addEventListener('DOMContent')
const taxiLoader = axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
const taxiResponse = await taxiLoader;
console.log