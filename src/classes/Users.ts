import { listUsers } from "../dataBase/users";
import { User } from "./User";


export class Users {
    private _data: User[]

    constructor() {
        this._data = []
    }


    public addUser(user: User) {
        const exist = listUsers._data.findIndex((i) => i.username === user.username)

        if(exist >= 0) {
            console.log('Esse name de usuário já exist. Não foi possível criá-lo.')
            console.log('//----------------------------------------------//')
            return
        }

        if(!listUsers._data.length ) {
            listUsers._data.push(user)
            console.log('Usuário criado com sucesso!')
            console.log('//----------------------------------------------//')
            return
        }

        listUsers._data.push(user)
        console.log('Usuário criado com sucesso!')
        console.log('//----------------------------------------------//')
    }

    public get data () {
        return this._data
    }
}