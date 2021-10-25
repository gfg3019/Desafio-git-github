const symbol1 = Symbol('genisson')
const symbol2 = Symbol('genisson')

//Symbol são unicos
console.log('symbol1 é igual a symbol2: ',  symbol1 === symbol2)

//Previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Genisson',
    [nameSymbol2]: 'João',
    lastName: 'Ferreira Gomes'
}

console.log(user)

//Symbol criam propriedades que não são enumberables
for(const key in user){
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user))
console.log('Valores das propriedades do objetos user: ', Object.values(user))

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user))

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do obejto user: ', Reflect.ownKeys(user))

//Criar enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT'),
}