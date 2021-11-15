/* LAB 3 CLUSTERING MARKERS */
// create a function that will calculate boundaries of the visible map,
// and randomly picks a set of coordinates.
function getRandomLatLng(map) {
    let boundaries = map.getBounds();
    let southWest = boundaries.getSouthWest();
    let northEast = boundaries.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;
    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [randomLat, randomLng,];
}

// Setting the initial coordinates
let singaporeZoo = [1.4043485,103.7908343];
let map = L.map('map').setView(singaporeZoo, 15);

// Setting the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzLWRlbGF0b3JyZSIsImEiOiJja3cwOWloOWhhZm5nMzFxMWRwam80a2RxIn0.8ktIyvaWh0aHXl_cfPNQnw'
}).addTo(map);

// create a marker cluster group
let markerCluster = L.markerClusterGroup();
L.marker([1.3326958,103.6767545]).addTo(markerCluster);
L.marker([1.3187119,103.704253]).addTo(markerCluster);
markerCluster.addTo(map);


// using a loop to add or increase markers to 1000
for (let i = 0; i < 1000; i++) {
    let position = getRandomLatLng(map);
    L.marker(position).addTo(markerCluster);
}
// after, add the cluster to the map like the overlay used in lab 2
markerCluster.addTo(map);