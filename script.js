var locationIcon = L.icon({
    iconUrl: '../assets/icon-location.svg',
    
    iconSize:     [66, 66], 
    iconAnchor:   [22, 74], 
    popupAnchor:  [-3, -76] 
});

var map = L.map('map').setView([41.48396562821763, -71.31089445913153], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([41.48396562821763, -71.31089445913153], {icon: locationIcon}).addTo(map)
    .openPopup();
