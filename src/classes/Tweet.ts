import { Like } from "./Like"
import { User } from "./User"
import { Base } from "./Base"

type TipoConteudo = 'content' | 'reply'

interface RetornoMostrar {
    content: string,
    likes: Like[],
    replies: Tweet[],
    tipo: TipoConteudo,
    user: User
}

export class Tweet extends Base {
    public _replies: Tweet[]
    private _likes: Like[]

    constructor(private _content: string, private _tipo: TipoConteudo, private _proprietario: User) {
        super()
        this._replies = []
        this._likes = []
    }

    public reply(tweet: Tweet): void {
        if(tweet.exibir().tipo !== 'reply') {
            console.log('Só é possível fazer essa ação quando o tweet é do tipo reply.')
            console.log('//----------------------------------------------//')
            return
        }

        this._replies.push(tweet)
        console.log('Reply feito com sucesso!')
        console.log('//----------------------------------------------//')
    }
    

    public like(user: User): void {
        const exist = this._likes.findIndex((i) => i.username === user.username)

        if(exist >= 0) {
            console.log('Você já curtiu esse tweet, não é possível curtir mais de uma vez.')
            console.log('//----------------------------------------------//')
            return
        }

        const like = new Like(user)
        this._likes.push(like)

        console.log(`Tweet curtido com sucesso!`)
        console.log('//----------------------------------------------//')
    }

    public exibir(): RetornoMostrar {
        return {
            content: this._content,
            likes: this._likes,
            replies: this._replies,
            tipo: this._tipo,
            user: this._proprietario
        }
    }

}
