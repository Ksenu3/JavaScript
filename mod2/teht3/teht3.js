let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Syötä numero:"));
    numbers.push(num);
}

let tulos = "";

for (let i = numbers.length - 1; i >= 0; i--) {
    tulos += numbers[i] + "<br>";
}

console.log(numbers);

document.querySelector("body").innerHTML = `Numerot käänteisessä järjestyksessä:<br>${tulos}`;
