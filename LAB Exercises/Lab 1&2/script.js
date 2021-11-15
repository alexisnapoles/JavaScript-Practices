/* LAB 1 SETTING UP  WEB MAP */
// initializing the mapping
// Singapore latitude, longitude (latlng) in an array
let singapore = [ 1.29,103.85];

// Setting the center point for the location: Assigning L as the variable for the leaflet object to create a new map (this is fetch through the script we included in the html file); setView function is used to set the center point of the map.
let map = L.map('map').setView(singapore, 15);

// setting up the tile layers function to access leaflet library
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzLWRlbGF0b3JyZSIsImEiOiJja3cwOWloOWhhZm5nMzFxMWRwam80a2RxIn0.8ktIyvaWh0aHXl_cfPNQnw'
}).addTo(map);

/* LAB 2 MARKERS AND OVERLAYS */
// To bring users attention to a specific point of interest using L object. It is important to be specific with the coordinates while creating marker.
let singaporeMarker = L.marker([1.29, 103.85]);
// placing the marker means adding it to the map using the addTo function
singaporeMarker.addTo(map);
// to notify the user where the location is it is good to add a popup-on-click functionality to the marker, with the bindPopup funtion.
singaporeMarker.bindPopup("<p>Singapore</p>")
// if we want to trigger a function besides showing a pop-up on the map, we can bind an event (addEventListener) to the icon, such that:
singaporeMarker.addEventListener('click', function() {
    // this is the area where we will indicate what we want to happen when the marker is clicked.
    alert("Singapore");
})

// one of the key features to give a user the direct locator of the area is to add a notifier (?) like circles or blinking etc.
let circle = L.circle([1.29, 103.85], {
    color: 'red',
    fillColor: 'orange',    
    fillOpacity: 0.5,
    radius: 150
})
// it is important to note that we need to add the above features to the map, otherwise it will not show up
circle.addTo(map);

// SingaporeZoo Marker
let singaporeZooMarker = L.marker([1.4043485,103.7908343]);
singaporeZooMarker.addTo(map);
singaporeZooMarker.bindPopup("<p>Singapore Zoo</p>")
singaporeZooMarker.addEventListener('click', function() {
    alert("Singapore Zoo");
})

// Singapore Zoo Circle Indicator
let circleZoo = L.circle([1.4043485,103.7908343], {
    color: 'red',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 300
})
circleZoo.addTo(map);

// Singapore Discovery Centre Marker
let singaporeDiscoveryCentreMarker = L.marker([1.3326958,103.6767545]);
singaporeDiscoveryCentreMarker.addTo(map);
singaporeDiscoveryCentreMarker.bindPopup("<p>Singapore Discovery Centre</p>")
singaporeDiscoveryCentreMarker.addEventListener('click', function() {
    alert("Singapore Discovery Centre");
})

// Singapore Discovery Centre Circle Indicator
let circleDiscoveryCentre = L.circle([1.3326958,103.6767545], {
    color: 'red',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 300
})
circleDiscoveryCentre.addTo(map);

// Singapore Jurong Bird Park Marker
let singaporeJurongBirdParkMarker = L.marker([1.3187119,103.704253]);
singaporeJurongBirdParkMarker.addTo(map);
singaporeJurongBirdParkMarker.bindPopup("<p>Jurong Bird Park</p>")
singaporeJurongBirdParkMarker.addEventListener('click', function() {
    alert("Jurong Bird Park");
})

// Singapore Jurong Bird Park Circle Indicator
let circleJurongBirdPark = L.circle([1.3187119,103.704253], {
    color: 'red',
    fillColor: 'orange',    
    fillOpacity: 0.5,
    radius: 300
})
circleJurongBirdPark.addTo(map);

/* End of script for Lab 1 and lab 2 */