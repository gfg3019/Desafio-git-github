/*const user = ['Genisson', 'Jorge', 'Isabel']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Genisson',
        age: 29,
        gender: gender.MAN
    },
    {
        name: 'Jorge',
        age: 27,
        gender: gender.MAN
    },
    {
        name: 'Isabel',
        age: 20,
        gender: gender.WOMAN
    }
]

//Retorna a quantidade de itens de um array
console.log('Itens', persons.length)

//Verifica se é array
console.log('A variável persons é um array: ', Array.isArray(persons))

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${persons.name}`)
})

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log(`\nNova lista apenas homens: `, mens)

//Retorna um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript'
    return person
})

console.log('\nPessoas com adição do curso', personsWithCourse)

//Transforma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log('\nA soma de toda as idades de pessoas: '. totalAge)

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) =>{
        age += person.age
        return age
    },0)*/

/* const person = Array.of('Genisson', 'Kenzo', 'Julius')
   console.log(person)*/

//PUSH
//Adiciona uma ou mais elementos no final do array e retorna o tamanho do novo array
//const arr = ['banana', 'melancia', 'maçã']
//const arrLength = arr.push('abacate')

//console.log(arrLength)
//4

//console.log(arr)
//[ 'banana', 'melancia', 'maçã', 'abacate' ]

//POP
//Remove  o último elemento  de um array e retorna o elemnto removido

/*const arr = ['banana', 'melancia', 'maçã']
const arrLength = arr.pop('abacate')
console.log(arrLength)
//maçã
console.log(arr)
//[ 'banana', 'melancia' ]*/


//UNSHIFT
//Adiciona um ou mais elementosno inicio do array e retorna o tamnaho do novo array
/*const arr = ['banana', 'melancia', 'maçã']
const arrLength = arr.unshift('abacate')
console.log(arrLength)
//4
console.log(arr)*/
//[ 'abacate', 'banana', 'melancia', 'maçã' ]


//SHIFT
//Remove o primeiro elemento de uma array e retorna um elemento removido
/*const arr = ['banana', 'melancia', 'maçã']
const arrLength = arr.shift('abacate')
console.log(arrLength)
//banana
console.log(arr)*/
//[ 'melancia', 'maçã' ]

//CONCAT
//Concatena um ou mais arrays retornando um novo array

/*const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const novoArr = arr1.concat(arr2)

console.log(arr1)
//[ 1, 2, 3 ]
console.log(arr2)
//[ 4, 5, 6 ]
console.log(novoArr)*/
//[ 1, 2, 3, 4, 5, 6 ]

//SLICE
//Retorna um novo array "fatiando" o array de acordo com ínicio e fim

/*const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(0, 2))
//[ 1, 2 ]
console.log(arr.slice(2))
//[ 3, 4, 5 ]
console.log(arr.slice(-1))
//[ 5 ]
console.log(arr.slice(-3))
//[ 3, 4, 5 ]*/

//SPLICE
//Artera um array adcionando novos elementos enquanto remove elementos antigos

/*const arr = [1, 2, 3, 4, 5]
console.log(arr.splice(2))
//[ 3, 4, 5 ]
console.log(arr)
//[ 1, 2 ]
console.log(arr.splice(0, 0, 'FIRST'))
//[]
console.log(arr)
//[ 'FIRST', 1, 2 ]*/

//forEach
//Iteração de cada item dentro de um array

const arr = ['batata', 'arroz', 'manga', 'feijão', 'carne']
arr.forEach((value, index)=>{
    console.log(`${index}: ${value}`)
})

//Map
//Retorna um novo array, de mesmo tamanho, iterando cada item de um array.
const arr2 = [1, 2, 3, 4, 5]

console.log(arr2.map(value => value * 2))

const separacao = () => console.log('==========================================')
//Flat
//Retorna um novo array com todos os elementos de um sub-array
//concatenados de forma recursiva de acordo com a profundidade especificada (depth)

const arr3 = [1 , 2, 3,[4, 5, 6,[7, 8, 9]]]
console.log(arr3.flat())

separacao()

//FlatMap
//Retorna um novo array assim como a função map executa um flat de profundade 1
const arr4 = [1, 2, 3, 4, 5]
console.log(arr4.flatMap(value => [value * 2]))
//
console.log(arr4.flatMap(value => [[value * 2]]))

separacao()

//Keys
//Retorna um array iterator que contém as chaves para cada elemento do array

const arrIterator = arr4.keys()

console.log(arrIterator.next())
//{ value: 0, done: false }
console.log(arrIterator.next())
//{ value: 1, done: false }
console.log(arrIterator.next())
//{ value: 2, done: false }
console.log(arrIterator.next())
//{ value: 3, done: false }
separacao()

//Entries
//Retorna um Array Iterator  que contém os pares chave/valor para cada elemento do arry
const alunos = {
        nome: 'João',
        turma: 456,
        ano: 2
    }
for(const [chave, valor] of Object.entries(alunos)){
    console.log(`${chave}: ${valor}`)
}
separacao()

//Find
//Retorna o primeiro itém de um array que satisfaz a condição

const primeiroMaiorQueDois = arr4.find(value => value > 2)
console.log(primeiroMaiorQueDois)
separacao()

//findIndex
//Retorna o índice do primeiro item de uma array que satisfaza condição

const primeiroMaiorQueDois2 = arr4.findIndex(value => value > 2)
console.log(primeiroMaiorQueDois2)
separacao()
//Filter 
//Retornar um novo array com todos os elementos que satisfazem a condição

const primeiroMaiorQueDois3 = arr4.filter(value => value > 2)
console.log(primeiroMaiorQueDois3)
separacao()

//indexOff
//Retorna o primeior índice em que um elemento pode ser encontrado no array
const firstIndexOfItem = arr4.indexOf(3)
console.log(firstIndexOfItem) 
separacao()

//lastIndexOf
//Rertorna o último índice em que um elemento pode ser encontrado no array

const arr5 = [1,3,3,4,3]
const lastIndexOfItem = arr5.lastIndexOf(3)
console.log(lastIndexOfItem)
separacao()

//includes
//Retrona um booleano verificando se determinado elemento existe no array

const hasItemOne = arr5.includes(1)
console.log(hasItemOne)

const hasItemTwo = arr5.includes(2)
console.log(hasItemTwo)

separacao()
//some
//Retorna um booleano verificando se pelo menos um item de uma array satifaz a condição
const hasSomeEvenNumber = arr5.some(value => value % 2 === 0)
console.log(hasSomeEvenNumber)

separacao()
//every 
//Retorna um booleano verificando se todos os item de um array satisfazem a condição
const allEvenNumbers = arr5.every(value => value % 2 === 0)
console.log(allEvenNumbers)

separacao()

//sort 
//Ordena os elementos de um array de acordo com a condição
const ordem = arr5.sort()
console.log(ordem)
separacao()
//reverse
//inverte os lementos de array

console.log(arr4.reverse())
//join
//Junta todos os elementos de um array, separados por um delimitador e retorna uma string

const numarando = arr4.join('#')
console.log(numarando)
separacao()

//reduce
//Retorna um novo tipo de dado iterando cada posição de um array
 const total = arr4.reduce((total, valor)=> total += valor, 0)
console.log(total)