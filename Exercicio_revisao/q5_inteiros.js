/* Escreva um programa que imprima os números inteiros entre dois valores lidos. */

const prompt = require('prompt-sync');
const input = prompt();

const i = Number(input('Digite o valor incial: '));
const f = Number(input('Digite o valor final: '));

for (let x = i+1; x < f; x++) {
    console.log(x);
}
