"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidOptionError = void 0;
const ApplicationError_1 = require("./ApplicationError");
class InvalidOptionError extends ApplicationError_1.ApplicationError {
    constructor(mensagem) {
        super(mensagem);
    }
}
exports.InvalidOptionError = InvalidOptionError;
