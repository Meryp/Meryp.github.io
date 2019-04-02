//alert("Hallo Welt");

const div = document.getElementById("map");
const breite = div.getAttribute("data-lat1");
const laenge = div.getAttribute("data-lng1");
const titel = div.getAttribute("data-title1");

//console.log(breite,laenge,titel)

//Karte initialisiren

let karte = L.map("map");

//console.log(karte);
//aus Ausschnitt zoomen

karte.setView(
    [breite,laenge],
    13);

//openstreetmap hinzufügen 
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(karte);

//Positionsmarker hinzufügen 
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








