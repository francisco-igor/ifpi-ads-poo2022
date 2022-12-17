import { ApplicationError} from "./ApplicationError";

class InvalidOptionError extends ApplicationError {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
    
export { InvalidOptionError };