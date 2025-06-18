
const kort = {
    hverdagshjerter: [
        "Du gjør livet mitt bedre hver dag.",
        "Takk for at du alltid er der.",
        "Et lite hjerte for en stor kjærlighet."
    ],
    luna: [
        "Hva drømmer du om i kveld?",
        "Lukk øynene – og se for deg oss to.",
        "Stillhet sammen med deg er magisk."
    ],
    rampete: [
        "I kveld er det bare du og jeg – uten filter.",
        "Et kyss her, et kyss der... hvor ender det?",
        "Skal vi lage vår egen hemmelighet i kveld?"
    ]
};

function visKort(kategori) {
    const kortListe = kort[kategori];
    const tilfeldigIndex = Math.floor(Math.random() * kortListe.length);
    document.getElementById("kortvisning").innerText = kortListe[tilfeldigIndex];
}

function låskontroll() {
    const kode = prompt("Skriv inn kode:");
    if (kode === "luna2025") {
        visKort("rampete");
    } else {
        alert("Feil kode!");
    }
}
