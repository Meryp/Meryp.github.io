//alert("Hallo Welt");

const div = document.getElementById("map");
const breite = div.getAttribute("data-lat1");
const laenge = div.getAttribute("data-lng1");
const titel = div.getAttribute("data-title1");

//punkt 2
const breite2= div.getAttribute("data-lat2");
const laenge2= div.getAttribute("data-lng2");
const titel2 = div.getAttribute("data-title2");

//punkt 3
const breite3= div.getAttribute("data-lat3");
const laenge3= div.getAttribute("data-lng3");
const titel3= div.getAttribute("data-title3");

//console.log("Breite="breite,"Länge="laenge,"Titel=",titel)

//Karte initialisieren

let karte = L.map("map");

//console.log(karte);
//auf Ausschnitt zoomen
karte.setView(
    [breite,laenge], 
13);

//Karten einbauen
const kartenLayer = {
    osm: L.tileLayer ("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}),
geolandbasemap: L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",{
subdomains: ["maps","maps1","maps2","maps3","maps4"],
attribution:'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),
bmapoverlay: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png",{
    subdomains:["maps","maps1","maps2","maps3","maps4"],
    attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),
geolandbasemapgrau: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png",{
    subdomains:["maps","maps1","maps2","maps3","maps4"],
    attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),
basemaphighdpi: L.tileLayer("https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg",{
    subdomains:["maps","maps1","maps2","maps3","maps4"],
    attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),
bmaporthofoto30cm: L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",{
    subdomains:["maps","maps1","maps2","maps3","maps4"],
    attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),
bmapgelaende: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgelaende/normal/google3857/{z}/{y}/{x}.jpeg",{
    subdomains:["maps","maps1","maps2","maps3","maps4"],
    attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),
geolandbasemapoberflaeche: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoberflaeche/normal/google3857/{z}/{y}/{x}.jpeg",{
    subdomains:["maps","maps1","maps2","maps3","maps4"],
    attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>'
}),

stamen_toner: L.tileLayer("http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",{
subdomains: ["a", "b", "c"],
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}),

stamen_terrain: L.tileLayer("http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",{
subdomains: ["a", "b","c"],
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}),

stamen_watercolor: L.tileLayer("http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",{
    subdomains: ["a","b","c"],
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    }) 
};



kartenLayer.osm.addTo(karte);
kartenLayer.geolandbasemap.addTo(karte);
kartenLayer.bmapoverlay.addTo(karte);
kartenLayer.geolandbasemapgrau.addTo(karte);
kartenLayer.basemaphighdpi.addTo(karte);
kartenLayer.bmaporthofoto30cm.addTo(karte);
kartenLayer.bmapgelaende.addTo(karte);
kartenLayer.geolandbasemapoberflaeche.addTo(karte);
kartenLayer.stamen_toner.addTo(karte);
kartenLayer.stamen_terrain.addTo(karte);
kartenLayer.stamen_watercolor.addTo(karte);


//Auswahlmenü hinzufügen
L.control.layers({
    "Openstreetmap": kartenLayer.osm,
    "Geoland Basemap": kartenLayer.geolandbasemap,
    "Geoland Basemap Overlay": kartenLayer.mapoverlay,
    "Geoland Basemap Grau": kartenLayer.bmapgrau,
    "Geoland Basemap HIDPI": kartenLayer.bmaphidpi,
    "Geoland Basemap Foto": kartenLayer.bmaporthofoto30cm,
    "Geoland Basemap Gelaende": kartenLayer.bmapgelaende,
    "Geoland Basemap Flaeche": kartenLayer.bmapoberflaeche,
    "Stamen Maps Toner": kartenLayer.stamen_toner,
    "Stamen Maps Terrain":kartenLayer.stamen_terrain,
    "Stamen Maps Watercolor":kartenLayer.stamen_watercolor
}).addTo(karte);


//Fernrohre
let blickeGruppe = L.feautureGroup().addTo(karte);

//Positionsmarker hinzufügen mit Popup Pin hinzufügen

//Positionsmarker 1

let pin1 = L.marker([breite1,laenge1])
.addTo(blickegruppe);
pin1.bindPopup(titel1).openPopup();

//Positionsmarker 2
let pin2 = L.marker([breite2,laenge2])
.addTo(blickegruppe);
pin1.bindPopup(titel2).openPopup();

//Positionsmarker 3
let pin3 = L.marker([breite3,laenge3])
.addTo(blickegruppe);
pin1.bindPopup(titel3).openPopup();

//Schleife
for (let blick of ADLERBLICKE) {
    //console.log(blick);
    let blick = L.marker( 
        [blick.lat,blick.lng]
    ).addTo(blickeGruppe);
    blickpin.bindPopup(
        `<h1>Standort ${blick.standort}</h1>
        <p>Höhe: ${blick.seehoehe} m</p>
        <em>Kunde: ${blick.kunde}</em>`
        );
}

//setzt Standard Zoom so, dass all die gesetzen Markierungen auf die Adlerblicke zoomen
console.log(blickeGruppe.getBounds());
// auf Adlerblicke zoomen
karte.fitBounds(blickeGruppe.getBounds());
karte.addControl(new L.Control.Fullscreen());


//Plugin (leaflet-hash) CDN:Fügt Koordinaten zu HTML Link hinzu
var hash = new L.Hash(karte);

var coonds = new L.Control.Coordinates ();
coords.addTo(karte);
karte.on ('click', function(e) {
    coords.setCoordinates(e);
});
