import { IdSizeMaxError } from "../excecoes/IdSizeMaxError";
import { IdSizeNullError } from "../excecoes/IdSizeNullError";

abstract class profile {
    private _id: string;

    constructor(id: string) {
        this._id = id;
    }

    public get id() {
        return this._id;
    }
}

class jogador extends profile {
    wins: number = 0;
    defeats: number = 0;

    constructor(id: string) {
        super(id);
        this.validateId(id);
    }

    validateId(id: string): boolean {
        if (id.length > 3) {
            throw new IdSizeMaxError("Tamanho de ID inválido! (Max = 3 caracteres");
        }
        if (id.length == 0) {
            throw new IdSizeNullError("Tamanho de ID inválido! (Min = 1 caractere");
        }
        return true;
    }

}

export {jogador};
