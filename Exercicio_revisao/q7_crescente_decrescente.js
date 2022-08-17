/* Escreva um programa que leia um vetor de inteiros de 5 posições e apresente-o na tela
de forma crescente e decrescente. */

const prompt = require('prompt-sync');
const input = prompt();

console.log('Digite 5 numeros inteiros')
let vetor = [];

for (let i = 0; i < 5; i++) {
    let x = Number(input('>>> '));

    vetor[i] = x;
}

vetor.sort(function(a, b) {return a - b});
console.log((vetor));
vetor.reverse();
console.log((vetor));
