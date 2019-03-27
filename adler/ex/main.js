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

const adlerblicke = [
    {
    kunde: "Wilder Kaiser", 
    standort:"Gruttenhütte",
    seehoehe: 1640,
    lat: 47.55564,
    lng: 12.31861
},
{
    kunde: "Bergbahn Scheffau",
    standort: "Brandstadl",
    seehoehe: 1640,
    lat: 47.49111,
    lng: 12.24778
},
{
    kunde: "Lechtal Tourismus ",
    standort: "Sonnalm Jöchelspitze",
    seehoehe: 1640,
    lat: 47.41028,
    lng: 10.24778
}
];

for (let blick of adlerblicke) {
    console.log(blick);
    let blick = L.marker( 
        [blick.lat,blick.lng]
    ).addTo(karte);
    blickpin.bindPopup(
        `<h1>Standort ${blick1.standort}</h1>
        <p>Höhe: ${blick1.seehoehe} m</p>
        <em>Kunde: ${blick1.kunde}</em>`
        );
}





