/* Escreva um programa que apresente o mês por extenso, a partir de um número
digitado pelo usuário (entre 1 e 12) e a quantidade de dias do mês. */

const prompt = require('prompt-sync');
const input = prompt();

const num = input('Digite o numero correspondente ao mes (1-12): ');

const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(`${mes[num-1]}, ${dias[num-1]} dias.`)
