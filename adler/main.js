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


//openstreetmap hinzufügen L.tileLayer("http://{s}.tile.osm.org./{z}/{x}/{y}.png").addTo(karte);

//Positionsmarker hinzufügen let pin = L.marker([breite,laenge]).addTo(karte);

//Popup zum Pin hängen pin.bindPopup(titel).openPopup();

let pin3 = L.marker(
    [blick1.lat, blick1.lng]
).addTo(karte);

let blickeGruppe = L.feautureGroup().addTO(karte);
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
console.log(blickeGruppe.getBounds());
// auf Adlerblicke zoomen
karte.fitBounds(blickeGruppe.getBounds());








