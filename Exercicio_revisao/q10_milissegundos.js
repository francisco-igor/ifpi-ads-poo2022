/* Faça uma função que recebe por parâmetro uma medida de tempo expressa em
milissegundos e retorna esse tempo dias, horas, minutos e segundos no formato: “Dias
hh:mm:ss”. */

const prompt = require('prompt-sync');
const input = prompt();

const medida = Number(input('Valor em ms: '));

console.log(temporizador(medida));

function temporizador(x) {
    let dia = x / 86400000;
    let hora = (x % 86400000) / 3600000;
    let min = ((x % 86400000) % 3600000) / 60000;
    let seg = (((x % 86400000) % 3600000) % 60000) / 1000;

    return `${dia.toFixed(0)}d ${zero(parseInt(hora), 2)}:${zero(parseInt(min), 2)}:${zero(parseInt(seg), 2)}`
}

function zero(x, y) {
    x = String(x);
    let cont = x.length;
      
    while (cont < y) {
        x = "0" + x;
        cont++;
    }
  return x;
}
