let ehdokkaat = [];

let maara = Number(prompt("Kuinka monta ehdokasta?"));

for (let i = 0; i < maara; i++) {
    let nimi = prompt(`Ehdokkaan ${i + 1} nimi:`);
    ehdokkaat.push({ name: nimi, votes: 0 });
}

let aanestajat = Number(prompt("Kuinka monta äänestäjää?"));

for (let i = 0; i < aanestajat; i++) {
    let aani = prompt(`Äänestäjä ${i + 1}, ketä äänestät?`);

    if (aani !== "") {
        for (let j = 0; j < ehdokkaat.length; j++) {
            if (ehdokkaat[j].name === aani) {
                ehdokkaat[j].votes++;
                break;
            }
        }
    }
}

ehdokkaat.sort((a, b) => b.votes - a.votes);

let voittaja = ehdokkaat[0];

let tulos = `Voittaja on ${voittaja.name}, ääniä ${voittaja.votes}.<br>`;
tulos += "Tulokset:<br>";

console.log(`Voittaja on ${voittaja.name}, ääniä ${voittaja.votes}.`);
console.log("Tulokset:");

for (let i = 0; i < ehdokkaat.length; i++) {
    console.log(`${ehdokkaat[i].name}: ${ehdokkaat[i].votes} ääntä`);
    tulos += `${ehdokkaat[i].name}: ${ehdokkaat[i].votes} ääntä<br>`;
}

document.querySelector("body").innerHTML = tulos;
