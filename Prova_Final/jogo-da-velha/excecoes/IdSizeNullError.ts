import { ApplicationError } from "./ApplicationError";

class IdSizeNullError extends ApplicationError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
    
export { IdSizeNullError };