import { randomUUID } from "crypto";

export abstract class Base {
    public _id: string

    constructor() {
        this._id = randomUUID()
    }

    public mostrar(){}
}