import { Tweet } from "./classes/Tweet";
import { User } from "./classes/User";
import { listUsers } from "./dataBase/users";


console.log('//----------------------------------------------//')
console.log('                  GROWTWEETER')
console.log('//----------------------------------------------//')

//

console.log('//----------------------------------------------//')
console.log('                  Cadastro de usuarios');
console.log('//----------------------------------------------//')

const usuario1 = new User('Rafael Apolinário', 'rafa' , 'rafael@rafael.com', '123456' )
const usuario2 = new User('maria Apolinário', 'mari' , 'maria@maria.com', '12345' )
const usuario3 = new User('Joao Apolinário', 'joao' , 'Joao@Joao.com', '1234' )

listUsers.addUser(usuario1)
listUsers.addUser(usuario2)
listUsers.addUser(usuario3)

// Twittando
console.log('//----------------------------------------------//')
console.log('                  Twittando');
console.log('//----------------------------------------------//')

const tweet1 = new Tweet('Meu time ganhou', 'content', usuario1)
usuario1.mandarTweet(tweet1)
const tweet2 = new Tweet('O candidato a presidente de direta do equador foi morto', 'content', usuario2)
usuario2.mandarTweet(tweet2)
const tweet3 = new Tweet('Amanhão é feriado', 'content', usuario3)
usuario3.mandarTweet(tweet3)

// seguir usuários
console.log('//----------------------------------------------//')
console.log('                  follow');
console.log('//----------------------------------------------//')
usuario1.seguir(usuario2)
usuario2.seguir(usuario1)
usuario3.seguir(usuario1)

// likes
console.log('//----------------------------------------------//')
console.log('                  Likes');
console.log('//----------------------------------------------//')
tweet1.like(usuario2) 
tweet1.like(usuario3) 
tweet2.like(usuario2) 
tweet3.like(usuario3) 
tweet2.like(usuario1)

// criação de replies
console.log('//----------------------------------------------//')
console.log('                  Respostas');
console.log('//----------------------------------------------//')
const reply1 = new Tweet('Não gosto do seu time', 'reply', usuario2)
const reply2 = new Tweet('O comunismo vai dominar a america', 'reply', usuario1)
const reply3 = new Tweet('Coisa boa', 'reply', usuario3)
tweet1.reply(reply1)
tweet2.reply(reply2)
tweet1.reply(reply3)

//exibirTweets
console.log('//----------------------------------------------//')
console.log('                  Tweets por usuario');
console.log('//----------------------------------------------//')
usuario1.exibir()
usuario2.exibir()
usuario3.exibir()

//exibirFeed 
console.log('//----------------------------------------------//')
console.log('                  Feed');
console.log('//----------------------------------------------//')

usuario1.exibirFeed()