/* 4. Altere também a sua classe Conta dos exercícios anteriores para:
    a. Ter atributos privados e métodos “get” para leitura;
    b. Verifique se sua implementação da classe Banco e os testes precisarão ser
    adaptados para ter métodos de leitura e escrita, visto que os atributos que
    agora são privados. */


export class Conta {

    private _numero: String;
    private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    
    get numero(): String {
        return this._numero;
        
    }

    get saldo(): number {
        return this._saldo;
    }
    
    
    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

}
