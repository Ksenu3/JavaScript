let nopat = Number(prompt("Anna noppien määrä:"));
let haluttuSumma = Number(prompt("Anna haluttu silmälukujen summa:"));

let onnistumiset = 0;
let toistot = 10000;

for (let i = 0; i < toistot; i++) {
    let summa = 0;

    for (let j = 0; j < nopat; j++) {
        let noppa = Math.floor(Math.random() * 6) + 1;
        summa = summa + noppa;
    }

    if (summa === haluttuSumma) {
        onnistumiset++;
    }
}

let todennakoisyys = (onnistumiset / toistot) * 100;

document.querySelector("body").innerHTML = `Todennäköisyys saada summa ${haluttuSumma}, ${nopat} nopalla on ${todennakoisyys.toFixed(2)}%.`;
