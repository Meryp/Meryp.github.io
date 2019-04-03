//alert("Hallo Welt");

const div = document.getElementById("map");
const breite = div.getAttribute("data-lat1");
const laenge = div.getAttribute("data-lng1");
const titel = div.getAttribute("data-title1");

//console.log("Breite="breite,"Länge="laenge,"Titel=",titel);

//Karte initialisieren

let karte = L.map("map");

//console.log(karte);
//aus Ausschnitt zoomen

karte.setView(
    [breite,laenge],
    13);

const kartenLayer = {
    osm: L.tileLayer ("https://{s}.tile.osm.org/{z}/{x}/{y}.png",{
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
geolandbasemapgelaende: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgelaende/normal/google3857/{z}/{y}/{x}.jpeg",{
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

//kartenLayer.osm.addTo(karte);
//kartenLayer.geolandbasemap.addTo(karte);
//kartenLayer.bmapgelaende.addTo(karte);
//kartenLayer.geolandbasemapgrau.addTo(karte);


//Auswahlmenü hinzufügen
L.control.layers({
"geolandbasemap": kartenLayer. geolandbasemap,
"mapoverlay": kartenLayer.mapoverlay,
"geolandbasemapgrau": kartenLayer. geolandbasemapgrau,

}).addTo(karte);

//1. Positionsmarker hinzufügen 
let pin1 = L.marker([breite,laenge])
.addTo(karte);

//Popup zum Pin hängen 
pin1.bindPopup(title1).openPopup();

let pin3 = L.marker(
    [blick1.lat, blick1.lng]).addTo(karte);

let blickeGruppe = L.feautureGroup().addTo(karte);
for (let blick of ADLERBLICKE) {
    //console.log(blick);
    let blick = L.marker( 
        [blick.lat,blick.lng]
    ).addTo(blickeGruppe);
    blickpin.bindPopup(
        `<h1>Standort ${blick1.standort}</h1>
        <p>Höhe: ${blick1.seehoehe} m</p>
        <em>Kunde: ${blick1.kunde}</em>`
        );
};
//console.log(blickeGruppe.getBounds());
// auf Adlerblicke zoomen
karte.fitBounds(blickeGruppe.getBounds());
karte.addControl(new L.Control.Fullscreen());
var hash = new L.Hash(karte);

var coonds = new L.Control.Coordinates ();
coords.addTo(karte);
karte.on ('click', function(e) {
    coords.setCoordinates(e);
});






