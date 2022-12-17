"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdSizeNullError = void 0;
const ApplicationError_1 = require("./ApplicationError");
class IdSizeNullError extends ApplicationError_1.ApplicationError {
    constructor(mensagem) {
        super(mensagem);
    }
}
exports.IdSizeNullError = IdSizeNullError;
