/* Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética e o desvio padrão destes números. Obs: o
valor –1 é somente um terminador e não deve ser considerado nos cálculos. */

const prompt = require('prompt-sync');
const input = prompt();

let sequencia = [];
let soma = 0;
let cont = 0;
let somatorio = 0;

console.log('Digite uma sequencia de numeros');

while (true) {
    let num = Number(input('>>> '));

    if (num == -1) {
        break;
    } else {
        sequencia[cont] = num;
        soma += num;
        cont++;
    }
}

let media = soma / cont;

for (let i = 0; i < cont; i++) {
    somatorio += (sequencia[i] - media) ** 2;
}

let desvio = (somatorio / cont) ** 0.5;

console.log(`Soma: ${soma} \nMedia: ${media} \nDesvio Padrao: ${desvio}`);