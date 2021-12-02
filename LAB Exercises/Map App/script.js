const singapore = [1.302585, 103.7996554];
let map = L.map('map').setView(singapore, 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzLWRlbGF0b3JyZSIsImEiOiJja3cwOWloOWhhZm5nMzFxMWRwam80a2RxIn0.8ktIyvaWh0aHXl_cfPNQnw'
}).addTo(map);

let marker = L.marker([1.302585, 103.7996554]).addTo(map);

let circle = L.circle([1.302585, 103.7996554], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

window.addEventListener('DOMContentLoaded', async function () {
    console.log('DOM loaded');
    const bikeRack = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
    const bikeRackLocation = bikeRack.data.features[0].geometry.coordinates;
    let markerClusterLayer = L.markerClusterGroup();
    for (let i = 0; i < bikeRackLocation.length; i++) {
        let point = bikeRackLocation[i];
        L.marker([point[1], point[0]]).bindPopup(`lat: ${point[1]}, lng: ${point[0]}`).addTo(markerClusterLayer);
    }
    markerClusterLayer.addTo(map);

    function getRandomLatLng(map) {
        // get the boundaries of the map
        let bounds = map.getBounds();
        let southWest = bounds.getSouthWest();
        let northEast = bounds.getNorthEast();
        let lngSpan = northEast.lng - southWest.lng;
        let latSpan = northEast.lat - southWest.lat;

        let randomLng = Math.random() * lngSpan + southWest.lng;
        let randomLat = Math.random() * latSpan + southWest.lat;

        return [randomLat, randomLng,];
    }

    let group = L.layerGroup();
        L.marker(getRandomLatLng(map)).addTo(group);
        L.marker(getRandomLatLng(map)).addTo(group);
        L.marker(getRandomLatLng(map)).addTo(group);
    group.addTo(map);

    let group2 = L.layerGroup();
    for (let i = 0; i < 300; i++) {
        L.circle(getRandomLatLng(map), {
            color: 'red',
            fillColor: "orange",
            fillOpacity: 0.5,
            radius: 500
        }).addTo(group2);
    }

    let group3 = L.layerGroup();
    for (let i = 0; i < 50; i++) {
        L.circle(getRandomLatLng(map), {
            color: 'red',
            fillColor: "green",
            fillOpacity: 0.5,
            radius: 250
        }).addTo(group3);
    }

    let baseLayers = {
        'Markers': group,
        'Circles': group2
    }

    let overlays = {
        'Green Circle': group3
    }

    L.control.layers(baseLayers, overlays).addTo(map);

});

// GeoLocator Plugin via Leaflet
const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
let osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

let osmGeocoder = new L.Control.OSMGeocoder({ placeholder: 'Search location...' });

map.addControl(osmGeocoder);