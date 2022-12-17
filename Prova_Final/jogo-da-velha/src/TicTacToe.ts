import { jogador } from "./classes"

import prompt from "prompt-sync"
import { InvalidOptionError } from "../excecoes/InvalidOptionError";
const input = prompt();

let opcao: string = "";

do {
    try {

        console.log("------------------\n",
                    ("  Jogo da Velha  \n"),
                    "------------------\n",
                    "1 - Nova Partida\n",
                    "0 - Sair\n");

        opcao = input(">> ");

        switch (opcao) {
             case "1":
                let info1 = input("jogador N1: ");
                let j1: jogador = new jogador(info1);

                let info2 = input("jogador N2: ");
                let j2: jogador = new jogador(info2);

                let rodadas = Number(input("Número de rodadas: "));

                for (let i = 0; i < rodadas; i++) {
                    iniciar(j1, j2);
                }
                resultados(j1, j2);

                break;
        }

    } catch (e: any) {
        throw new InvalidOptionError("Opção Inválida!");
    }

} while (opcao != "0");

function iniciar(j1: jogador, j2: jogador): void {
    let pos: string[] = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let vencedor;


    for(let i = 0; i < (pos.length - 4); i++) {
        console.clear();

        console.log("     |     |     ");
        console.log(`  ${pos[0]}  |  ${pos[1]}  |  ${pos[2]}  `);
        console.log("_____|_____|_____");
        console.log("     |     |     ");
        console.log(`  ${pos[3]}  |  ${pos[4]}  |  ${pos[5]}  `);
        console.log("_____|_____|_____");
        console.log("     |     |     ");
        console.log(`  ${pos[6]}  |  ${pos[7]}  |  ${pos[8]}  `);
        console.log("     |     |     ");


        let jogada1: any = verifica(j1, pos);
        pos[jogada1-1] = 'X';


        if (pos[0] == 'X' && pos[1] == 'X' && pos[2] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[3] == 'X' && pos[4] == 'X' && pos[5] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[6] == 'X' && pos[7] == 'X' && pos[8] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[0] == 'X' && pos[4] == 'X' && pos[8] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[7] == 'X' && pos[4] == 'X' && pos[2] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[0] == 'X' && pos[4] == 'X' && pos[7] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[2] == 'X' && pos[5] == 'X' && pos[8] == 'X') {
            vencedor = j1.id;
            break;
        } else if (pos[3] == 'X' && pos[6] == 'X' && pos[9] == 'X') {
            vencedor = j1.id;
            break;
        }

        console.clear();

        console.log("     |     |     ");
        console.log(`  ${pos[0]}  |  ${pos[1]}  |  ${pos[2]}  `);
        console.log("_____|_____|_____");
        console.log("     |     |     ");
        console.log(`  ${pos[3]}  |  ${pos[4]}  |  ${pos[5]}  `);
        console.log("_____|_____|_____");
        console.log("     |     |     ");
        console.log(`  ${pos[6]}  |  ${pos[7]}  |  ${pos[8]}  `);
        console.log("     |     |     ");


        let jogada2: any = verifica(j2, pos);
        pos[jogada2-1] = 'O';


        if (pos[0] == 'O' && pos[1] == 'O' && pos[2] == 'O') {
            console.log(`Vencedor: ${j2.id}`);
            break;
        } else if (pos[3] == 'O' && pos[4] == 'O' && pos[5] == 'O') {
            console.log(`Vencedor: ${j2.id}`);
            break;
        } else if (pos[6] == 'O' && pos[7] == 'O' && pos[8] == 'O') {
            vencedor = j2.id;
            break;
        } else if (pos[0] == 'O' && pos[4] == 'O' && pos[8] == 'O') {
            vencedor = j2.id;
            break;
        } else if (pos[7] == 'O' && pos[4] == 'O' && pos[2] == 'O') {
            vencedor = j2.id;
            break;
        } else if (pos[0] == 'O' && pos[4] == 'O' && pos[7] == 'O') {
            vencedor = j2.id;
            break;
        } else if (pos[2] == 'O' && pos[5] == 'O' && pos[8] == 'O') {
            vencedor = j2.id;
            break;
        } else if (pos[3] == 'O' && pos[6] == 'O' && pos[9] == 'O') {
            vencedor = j2.id;
            break;
        }

        console.log(vencedor);

        if (vencedor == j1.id) {
            j1.wins += 1;
            j2.defeats += 1;
        } else {
            j2.wins += 1;
            j1.defeats += 1;
        }
    }
}

function verifica(p: jogador, v: string[]): number {
    let opcao = Number(input(`${p.id} >> `));

    while (true) {

        if (v[opcao-1] == ' ') {
            return opcao;
        } else {
            console.log("Posição preenchida!");
        }
        opcao = Number(input(`${p.id} >> `));

    }
}

function resultados(j1: jogador, j2: jogador): void{
    console.log(`--------------\n
ID: ${j1.id}\n
Vitórias: ${j1.wins}\n
Derrotas: ${j1.defeats}\n
    `);

    console.log(`--------------\n
ID: ${j2.id}\n
Vitórias: ${j2.wins}\n
Derrotas: ${j2.defeats}\n
    `);
}
