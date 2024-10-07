
class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        if (this.tipo === 'Mago') {
            ataque = 'magia';
        } else if (this.tipo === 'Guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'Monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'Ninja') {
            ataque = 'shuriken'
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}


const mago = new hero('Gandalf', 2000, 'Mago');
const guerreiro = new hero('Link Tunado', 30, 'Guerreiro');
const monge = new hero('Lee Sin', 60, 'Monge');
const ninja = new hero('Naruto', 16, 'Ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();