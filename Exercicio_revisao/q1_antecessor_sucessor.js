/* Escreva um programa que possua uma variável com um número ponto flutuante e
mostre seu antecessor e sucessor, ambos inteiros. */

const prompt = require('prompt-sync');
const input = prompt();

const num = Number(input('Digite um numero com uma casa decimal: '));

const resto = num % 1;
let antecessor = num - resto;
let sucessor = antecessor + 1;

console.log(`O antecessor eh ${antecessor} e o sucessor eh ${sucessor}.`);
