const name = 'Genisson'

//Não pode alterar o valor
//name = 'Genisson'

const user = {
    name: 'Genisson'
}

//Mas se for um Objeto podemos trocar suas propriedades
user.name = 'Outro nome'

//Não podemos fazer o objeto "apontar para outro lugar"
/*user = {
    name: 'Genisson'
}*/

const persons = ['Genisson', 'João', 'Pedro']

//Podemos adicionar novos itens
persons.push('Kenzo')

//Podemos remover algum item
persons.shift()

//Podemos alterar diretamente
persons[1] = 'James'

console.log('\n Array após as alterações: ', persons);