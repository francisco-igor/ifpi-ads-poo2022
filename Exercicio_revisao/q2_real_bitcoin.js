/* Escreva um programa para converter de real para bitcoin e exibir para o usuário a
resposta final. Considere até 8 casas decimais. */

const prompt = require('prompt-sync');
const input = prompt();

const bit = 124177.88;

const valor = Number(input('Digite um valor (R$): '));

let conversao = valor / bit;

console.log(`O valor convertido eh de ${conversao.toFixed(8)}.`);
