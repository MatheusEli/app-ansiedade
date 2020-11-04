import { classToPlain } from "class-transformer";
export abstract class Model {
    id: string;
    toObject(): object {
        let obj: any = classToPlain(this); //realiza a desserialização para uma classe literal
        delete obj.id;
        return obj;
    }
}