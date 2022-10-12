/* 1. Crie uma classe Calculadora que tenha:
    a. Dois atributos privados (operando1 e 2) do tipo number;
    b. Dois métodos públicos, cada um representando uma operação básica;
    c. Um construtor onde são passados os operandos e que esses inicializam os
    atributos;

    Teste a classe calculadora e seus métodos. Tente acessar os atributos
    diretamente e verifique o que acontece. */
    

class Calculadora {
    
    private _operando1: number;
    private _operando2: number;

    constructor(a: number, b: number) {
        this._operando1 = a;
        this._operando2 = b;
    }

    public somar(): number {
        return this._operando1 + this._operando2;
    }

    public subtrair(): number {
        return this._operando1 - this._operando2;
    }

}

let equacao: Calculadora = new Calculadora(8, 5);

// equacao.operando1 = 5; //Property 'operando1' is private and only accessible within class 'Calculadora'
// equacao.operando2 = 3; //Property 'operando2' is private and only accessible within class 'Calculadora'

console.log(equacao.somar());
console.log(equacao.subtrair());
