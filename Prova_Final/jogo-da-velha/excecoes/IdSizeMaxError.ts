import { ApplicationError } from "./ApplicationError";

class IdSizeMaxError extends ApplicationError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
    
export { IdSizeMaxError };