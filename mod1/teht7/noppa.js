let heitot = Number(prompt("Montako kertaa heitetään noppaa?"));

let summa = 0;

for (let i = 0; i < heitot; i++) {
    let noppa = Math.floor(Math.random() * 6) + 1;
    summa = summa + noppa;
}

document.querySelector("body").innerHTML = `Nopanheittojen summa on: ${summa}.`;