//alert("Hallo Welt");

const div = document.getElementById("map");
const breite = div.getAttribute("data-lat");
const laenge = div.getAttribute("data-lng");
const titel = div.getAttribute("data-title");

//console.log(breite,laenge,titel)

//Karte initialisieren

let karte = L.map("map");

//console.log(karte);
//aus Ausschnitt zoomen

karte.setView(
    [breite,laenge],
    13);
    
//openstreetmap hinzufügen 
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(karte);

const kartenLayer = {
    osm: L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    stamen_toner: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    stamen_terrain: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    }),
    stamen_watercolor: L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Desxign</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    }),
    NZ_Topo50: L.tileLayer("http://tiles-a.data-cdn.linz.govt.nz/services;key=88a3903ff4484424a745f012086cb9d8/tiles/v4/layer=50767/EPSG:3857/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Copyright 2011 Crown copyright (c) Land Information New Zealand and the New Zealand Government. All rights reserved'
    }),
    NZ_Aerial_Imagery: L.tileLayer("http://tiles-a.data-cdn.linz.govt.nz/services;key=88a3903ff4484424a745f012086cb9d8/tiles/v4/set=4702/EPSG:3857/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Copyright 2011 Crown copyright (c) Land Information New Zealand and the New Zealand Government. All rights reserved'
    }),

};

kartenLayer.osm.addTo(karte);

L.control.layers({
    "OpenStreetMap": kartenLayer.osm,
    "Stamen Toner": kartenLayer.stamen_toner,
    "Stamen Terrain": kartenLayer.stamen_terrain,
    "Stamen Watercolor": kartenLayer.stamen_watercolor,
    "NZ Topo50 Maps": kartenLayer.NZ_Topo50,
    "NZ Aerial Imagery": kartenLayer.NZ_Aerial_Imagery,

}).addTo(karte);

//Positionsmarker hinzufügen 
let pin = L.marker([breite, laenge]).addTo(karte);

//Popup zum Pin hängen 
pin.bindPopup(titel).openPopup();

//Karten Plugin
karte.addControl(new L. Control.Fullscreen()); 
var hash = new L.Hash(karte);// Koordinaten anzeigen im Link

var coords = new L. Control.Coordinates();//Koordinaten durch Klick anzeigen
coords.addTo(karte);
karte.on('click', function (e) {
    coords.setCoordinates(e);
});

