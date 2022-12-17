class ApplicationError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

export {ApplicationError};