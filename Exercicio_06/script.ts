/* Crie scripts que testam todas classes e verifiquem o acesso a atributos privados. */

import { Conta } from "./questao04";
import { Banco } from "./questao03";


let banco: Banco = new Banco();

let conta1: Conta = new Conta("125", 10567.25);

// conta1._numero("30");

let conta2: Conta = new Conta("229", 5671.36);

// conta2._saldo(10000);

let conta3: Conta = new Conta("303", 25642.89);

banco.inserir(conta1);
banco.inserir(conta2);
banco.inserir(conta3);

console.log(banco.consultar("229"));
