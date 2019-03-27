//alert("Hallo Welt");

const div = document.getElementByld("map")
const breite = div.getAttribute("data-lat");
const laenge = div.getAttribute("data-Ing");
const titel = div.getAttribute("data-title");

//console.log(breite,laenge,titel)

//Karte initialisiren

let karte = L.map("map");
//console.log(karte);
//aus Ausschnitt zoomen

karte.setView([47.2,11.2],
    9);

//openstreetmap hinzufügen L.tileLayer("http://{s}.tile.osm.org./{z}/{x}/{y}.png").addTo(karte);

//Positionsmarker hinzufügen let pin = L.marker([breite,laenge]).addTo(karte);

//Popup zum Pin hängen pin.bindPopup(titel).openPopup();

let pin3 = L.marker(
    [blick1.lat, blick1.lng]
).addTo(karte);







