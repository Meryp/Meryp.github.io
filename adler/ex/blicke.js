const ADLERBLICKE = [
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

for (let blick of ADLERBLICKE) {
    console.log(blick);
    let blick = L.marker( 
        [blick.lat,blick.lng]
    ).addTo(karte);
    blickpin.bindPopup(
        `<h1>Standort ${blick1.standort}</h1>
        <p>Höhe: ${blick1.seehoehe} m</p>
        <em>Kunde: ${blick1.kunde}</em>`
        );
};
