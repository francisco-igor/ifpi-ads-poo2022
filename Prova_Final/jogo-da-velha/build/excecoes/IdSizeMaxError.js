"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdSizeMaxError = void 0;
const ApplicationError_1 = require("./ApplicationError");
class IdSizeMaxError extends ApplicationError_1.ApplicationError {
    constructor(mensagem) {
        super(mensagem);
    }
}
exports.IdSizeMaxError = IdSizeMaxError;
