import { Base } from "./Base";
import { User } from "./User";

export class Like extends Base {
    constructor(private _user: User) {
        super()
    }

    public get username(): string {
        return this._user.username;
    }
}