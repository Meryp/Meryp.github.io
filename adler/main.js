//alert("Hallo Welt");

const div = document.getElementById("map");
const breite1 = div.getAttribute("data-lat1");
const laenge1 = div.getAttribute("data-lng1");
const titel1 = div.getAttribute("data-title1");

//punkt 2
const breite2 = div.getAttribute("data-lat2");
const laenge2 = div.getAttribute("data-lng2");
const titel2 = div.getAttribute("data-title2");

//punkt 3
const breite3 = div.getAttribute("data-lat3");
const laenge3 = div.getAttribute("data-lng3");
const titel3 = div.getAttribute("data-title3");

//punkt 4
const breite4 = div.getAttribute("data-lat4");
const laenge4 = div.getAttribute("data-lng4");
const titel4 = div.getAttribute("data-title4");


//console.log("Breite="breite,"Länge="laenge,"Titel=",titel)

//Karte initialisieren

let karte = L.map("map");

//console.log(karte);
//auf Ausschnitt zoomen
karte.setView(
    [47.2, 11.2],
    9);

//Karten einbauen openstreetmap
const kartenLayer = {
    osm: L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        subdomains: ["a", "b", "c"],
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),

    geolandbasemap: L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),

    bmapoverlay: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),

    bmapgrau: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),

    bmaphidpi: L.tileLayer("https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),

    bmaporthofoto30cm: L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),

    bmapgelaende: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgelaende/grau/google3857/{z}/{y}/{x}.jpeg", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
    }),

    bmapoberflaeche: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoberflaeche/grau/google3857/{z}/{y}/{x}.jpeg", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
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
};

//Kartenlayer hinzufügen!
kartenLayer.osm.addTo(karte);
//kartenLayer.geolandbasemap.addTo(karte);
//kartenLayer.bmapoverlay.addTo(karte);
//kartenLayer.geolandbasemapgrau.addTo(karte);
//kartenLayer.basemaphighdpi.addTo(karte);
//kartenLayer.bmaporthofoto30cm.addTo(karte);
//kartenLayer.bmapgelaende.addTo(karte);
//kartenLayer.geolandbasemapoberflaeche.addTo(karte);
//kartenLayer.stamen_toner.addTo(karte);
//kartenLayer.stamen_terrain.addTo(karte);
//kartenLayer.stamen_watercolor.addTo(karte);


//Auswahlleiste hinzufügen
L.control.layers({
    "OpenStreetMap": kartenLayer.osm,
    "Geoloand Basemap": kartenLayer.geolandbasemap,
    "Geoland Besmap Overlay": kartenLayer.bmapoverlay,
    "Geoland Basemap Grau": kartenLayer.bmapgrau,
    "Basemap High DPI": kartenLayer.bmaphidpi,
    "Geoland Basemap Orthofoto": kartenLayer.bmaporthofoto30cm,
    "Geoland Basemap Gelände": kartenLayer.bmapgelaende,
    "Geoland Basemap Oberfläche": kartenLayer.bmapoberflaeche,
    "Stamen Toner": kartenLayer.stamen_toner,
    "Stamen Terrain": kartenLayer.stamen_terrain,
    "Stamen Watercolor": kartenLayer.stamen_watercolor
}).addTo(karte);



//Fernrohre
let blickeGruppe = L.featureGroup().addTo(karte);

//Positionsmarker hinzufügen mit Popup Pin hinzufügen

//Positionsmarker 1
let pin1 = L.marker([breite1, laenge1])
    .addTo(karte);
pin1.bindPopup(titel1).openPopup();

//Positionsmarker 2
let pin2 = L.marker([breite2, laenge2])
    .addTo(karte);
pin2.bindPopup(titel2).openPopup();

//Positionsmarker 3
let pin3 = L.marker([breite3, laenge3])
    .addTo(karte);
pin3.bindPopup(titel3).openPopup();

//Positionsmarker 4
let pin4 = L.marker([breite4, laenge4])
    .addTo(karte);
pin3.bindPopup(titel4).openPopup();

//Schleife
for (let blick of ADLERBLICKE) {
    //console.log(blick);
    let blick = L.marker(
        [blick.lat, blick.lng]
    ).addTo(blickeGruppe);
    blickpin.bindPopup(
        `<h1>Standort ${blick.standort}</h1>
        <p>Höhe: ${blick.seehoehe} m</p>
        <em>Kunde: ${blick.kunde}</em>`
    );
}
//karten elemente einbauen: 
//setzt Standard Zoom so, dass all die gesetzen Markierungen auf die Adlerblicke zoomen
console.log(blickeGruppe.getBounds());

karte.fitBounds(blickeGruppe.getBounds());
karte.addControl(new L.Control.Fullscreen());

var hash = new L.Hash(karte);
var coords = new L.Control.Coordinates();
coords.addTo(karte);
karte.on('click', function (e) {
    coords.setCoordinates(e);
});