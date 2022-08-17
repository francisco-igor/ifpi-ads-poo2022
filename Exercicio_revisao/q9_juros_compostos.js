/* Escreva uma função que dados 2 valores reais v e t. Onde v é um valor em R$ e t é a
taxa de juros em %. Retorne um array de 12 posições meses representando a taxa
aplicada como juros compostos ao valor v mês a mês.
Ex: v = 1000,00 e t = 1%. Retornar: 1.010 – 1.020,10 - 1.030,30 - ... - 1.126,82. */

const prompt = require('prompt-sync');
const input = prompt();

let v = Number(input('Digite um valor (R$): '));
const t = Number(input('Digite a taxa (%): '));

let montante;
let vetor = [];

for (let i = 0; i < 12; i++) {
    montante = v * (1 + (t/100));

    vetor[i] = zero(montante).toFixed(2);
    v = montante;
}

console.log(vetor);

function zero(x) {
    x = x * 100;
    x = parseInt(x);
    x = x / 100

    return x;
}
