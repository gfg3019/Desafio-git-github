/*function Cachorro(){}
Cachorro.prototype.latir = function () {}

const c = new Cachorro()
console.log(c.__proto__)*/

/*class Pessoa{
    #nome = ''
    constructor(nomeInicial){
        this.#nome = nomeInicial
    }

    set nome(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }
}

class PessoaFisica extends Pessoa{
    constructor(name, cpf){
        super(name)
        this.cpf = cpf
    }
}

let p = new Pessoa()
p.nome = 'Genisson'

console.log(`Seu nome é: ${p.nome}`)*/

/*'use strict'

class Animal {
    constructor(){
        this.qtdePatas = 0
    }

    movimentar(){}
}

class Cachorro extends Animal{
    constructor(morde){
        super()
        this.qtdePatas = 4
        this.morde = morde
    }

    latir(){
        console.log('Au! au!')
    }
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

console.log(pug)
console.log(pitbull)*/

class Person{
    static walk(){
        console.log('walking...')
    }
}

Person.walk()