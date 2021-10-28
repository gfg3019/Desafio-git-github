/*function soma(a: number, b: number){
    return a + b
}*/

//types
//interfaces

/*interface IAnimal{
    nome: string,
    tipo: 'terrestre' | 'aquático',
    tipoComunicacao(): void,
    domestico: boolean
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'médio' | 'grande'
}

type IDomestico = IFelino | ICanino

const animal: IDomestico = {
    domestico: false,
    nome: 'Elefante',
    tipo: 'terrestre',
    tipoComunicacao: () => 'Ueuuueee',
    visaoNoturna: false
}

const animal2: IFelino = {
    domestico: true,
    nome: 'Gato',
    tipo: 'terrestre',
    visaoNoturna: true,
    tipoComunicacao: () => 'UAAAAAAAAAAAAUUUU'
}

console.log(`É domestico: ${animal.domestico}
    \nNome:${animal.nome}
    \nTipo:${animal.tipo}
    \nTipo de comunicação social: ${animal.tipoComunicacao()}`)
console.log(`Nome:${animal2.nome}
    \nTipo:${animal2.tipo}
    \nTipo de comunicação social: ${animal2.tipoComunicacao()}`)*/

/*const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})

function adicionarApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor)
}

adicionarApendiceALista(['a', 'd', 'f'], 'g')*/

/*interface IUsuario{
    id: string,
    email: string,
    cargo?: 'gerente' | 'coodernador' | 'supervisor' | 'funcionario'
}

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo)
    }

    //redirecionar para a área de usuario
}

interface Cachorro {
    nome: string,
    idade: number,
    parqueFavorito?: string
}

type CachorroSomenteLeitura ={
    +readonly [K in keyof Cachorro]-?: Cachorro[K]
}

class MeuCachorro implements CachorroSomenteLeitura{
    idade
    nome
    parqueFavorito

    constructor(nome, idade){
        this.idade = idade
        this.nome = nome
        this.parqueFavorito = this.parqueFavorito
    }
}

import $ from 'jquery'
$.fn.extend({
    novaFuncao(){
        console.log('Chamou a função')
    }
})

$('body').novaFuncao()*/

interface Pessoa{
    nome: string,
    idade: number,
    nacionalidade: string,
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

const brasileiro: Brasileiro = {
    nome: 'genisson',
    idade: 26
}