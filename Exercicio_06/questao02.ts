/* 2. Crie uma classe Hora que tenha:
    a. Três atributos privados e definidos no construtor chamados hora, minutos e
    segundos;
    b. Métodos públicos para ler hora, minuto e segundo de forma individual;
    c. Um método público para retorne a hora no formato “hh:mm:ss”. */


class Hora {

    private _hora: number;
    private _minutos: number;
    private _segundos: number;

    constructor(a: number, b: number, c: number,) {
        this._hora = a;
        this._minutos = b;
        this._segundos = c;
    }

    public lerHora(a: number): void {
        this._hora = a;
    }

    public lerMinutos(b: number): void {
        this._minutos = b;
    }

    public lerSegundos(c: number): void {
        this._segundos = c;
    }

    public horas(): string {
        return `${this._hora}:${this._minutos}:${this._segundos}`
    }

}

let tempo: Hora = new Hora(12, 34, 56);

tempo.lerHora(3);
tempo.lerMinutos(33);
tempo.lerSegundos(66);

console.log(tempo.horas());
