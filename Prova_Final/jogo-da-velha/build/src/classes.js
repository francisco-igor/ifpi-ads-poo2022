"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jogador = void 0;
const IdSizeMaxError_1 = require("../excecoes/IdSizeMaxError");
const IdSizeNullError_1 = require("../excecoes/IdSizeNullError");
class profile {
    constructor(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
class jogador extends profile {
    constructor(id) {
        super(id);
        this.wins = 0;
        this.defeats = 0;
        this.validateId(id);
    }
    validateId(id) {
        if (id.length > 3) {
            throw new IdSizeMaxError_1.IdSizeMaxError("Tamanho de ID inválido! (Max = 3 caracteres");
        }
        if (id.length == 0) {
            throw new IdSizeNullError_1.IdSizeNullError("Tamanho de ID inválido! (Min = 1 caractere");
        }
        return true;
    }
}
exports.jogador = jogador;
