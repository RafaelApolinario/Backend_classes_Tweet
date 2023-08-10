import { Tweet } from "./Tweet"
import { listUsers } from "../dataBase/users"
import { Base } from "./Base"

export class User extends Base {
    private _followers: User[]
    private _tweets: Tweet[]

    constructor(private _name: string, private _username: string, private _email: string, private _password: string) {
        super()
        this._followers = []
        this._tweets = []
    } 

    public mandarTweet(tweet: Tweet) {
        if(this._id !== tweet.exibir().user._id){
            console.log('Não é permitido enviar um tweet que é de outro usuário')
            console.log('//----------------------------------------------//')
            return
        }
        if(tweet.exibir().tipo !== "content") {
            console.log('Não é permitido criar um novo tweet do tipo reply.')
            console.log('//----------------------------------------------//')
            return
        }
        this._tweets.push(tweet)
        console.log('Tweet enviado com sucesso!')
        console.log('//----------------------------------------------//')
    }

    public seguir (user: User) {
        const exist = listUsers.data.findIndex((user) => user._username === user._username)

        if (exist === -1) {
            console.log('Esse usuário não exist.')
            console.log('//----------------------------------------------//')
            return
        }

        if(this._username === user._username) {
            console.log('Não é possível/permitido seguir a si mesmo.')
            console.log('//----------------------------------------------//')
            return
        }

        this._followers.push(user)
        console.log(`Usuário @${user._username} seguido!`)
        console.log('//----------------------------------------------//')
    }

    public exibirFeed() {
        if(!this._followers.length) {
            console.log('Você não segue ninguém para exibir o feed.')
            console.log('//----------------------------------------------//')
            return
        }

        this._followers.forEach((seguidor) => {
            if(!seguidor._tweets.length){
                console.log('Os usuários que você segue não twitaram nada ainda...')
                console.log('//----------------------------------------------//')
                return
            }

            seguidor.exibir()
        })
    }

    public exibir() {
        if (this._tweets.length === 0) {
            console.log('Você não twitou nenhuma vez.')
            console.log('//----------------------------------------------//')
            return
        }

        this._tweets.forEach((tweet) => {
            if(!tweet.exibir().likes.length) {
                console.log(`@${this._username}: ${tweet.exibir().content} \n [0] likes.`)
                if(tweet.exibir().replies.length === 0) {
                    console.log('//----------------------------------------------//')
                    return
                }
                tweet.exibir().replies.forEach((reply) => {
                    console.log(`     >@${reply.exibir().user._username}: ${reply.exibir(). content}`)
                })
                console.log('//----------------------------------------------//')
                return
            }

            if(tweet.exibir().likes.length === 1) {
                console.log(`@${this._username}: ${tweet.exibir().content} \n [${tweet.exibir().likes[0].username}] curtiu`)
                if(!tweet.exibir().replies.length) {
                    console.log('//----------------------------------------------//')
                    return
                }
                tweet.exibir().replies.forEach((reply) => {
                    console.log(`     >@${reply.exibir().user._username}: ${reply.exibir(). content}`)
                })
                console.log('//----------------------------------------------//')
                return
            }

            if(!tweet.exibir().replies.length) {
                console.log(`@${this._username}: ${tweet.exibir().content} \n [${tweet.exibir().likes.length}] likes`)
                console.log('//----------------------------------------------//')
                return
            }
            
            console.log(`@${this._username}: ${tweet.exibir().content} \n [${tweet.exibir().likes.length}] likes`)
            tweet.exibir().replies.forEach((reply) => {
                console.log(`     >@${reply.exibir().user._username}: ${reply.exibir(). content}`)
            })
            console.log('//----------------------------------------------//')
        })
    }

    public get username (): string{
        return this._username
    }
}