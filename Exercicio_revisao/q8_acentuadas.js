/* Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais
acentuadas por não acentuadas. Exiba a string resultante. */

const prompt = require('prompt-sync');
const input = prompt();

let texto = input('Digite um texto: ').toLowerCase();

const acen = [/á/g, /â/g, /ã/g, /à/g, /é/g, /ê/g, /è/g, /í/g, /î/g, /ì/g, 
/ó/g, /ô/g, /õ/g, /ò/g, /ú/g, /û/g, /ù/g];

for (let i = 0; i < 4; i++) {
    texto = texto.replace(acen[i], 'a');
}
for (let i = 4; i < 7; i++) {
    texto = texto.replace(acen[i], 'e');
}
for (let i = 7; i < 10; i++) {
    texto = texto.replace(acen[i], 'i');
}
for (let i = 10; i < 14; i++) {
    texto = texto.replace(acen[i], 'o');
}
for (let i = 14; i < 16; i++) {
    texto = texto.replace(acen[i], 'u');
}

console.log(texto);
