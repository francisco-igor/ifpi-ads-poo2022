"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(mensagem) {
        super(mensagem);
    }
}
exports.ApplicationError = ApplicationError;
