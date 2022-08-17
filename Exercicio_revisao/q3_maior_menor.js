/* Escrever um programa que leia três valores inteiros e apresente o maior e o menor dos
valores lidos. */

const prompt = require('prompt-sync');
const input = prompt();

const valor = input('Digite tres valores inteiros: ').split(' ');

for (let i = 0; i < 3; i++) {
    valor[i] = Number(valor[i]);
}

maior = valor[0];
menor = valor[0];

if (valor[1] > maior) {
    maior = valor[1];
}
if (valor[2] > maior) {
    maior = valor[2];
}
if (valor[1] < menor) {
    menor = valor[1];
}
if (valor[2] < menor) {
    menor = valor[2];
}

console.log(`O maior eh ${maior} e o menor eh ${menor}.`);
