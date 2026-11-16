function concat(taulukko) {
    let tulos = "";

    for (let i = 0; i < taulukko.length; i++) {
        tulos += taulukko[i];
    }

    return tulos;
}

let nimet = ["Johnny", "DeeDee", "Joey", "Marky"];

document.querySelector("body").innerHTML = `${concat(nimet)}`;
