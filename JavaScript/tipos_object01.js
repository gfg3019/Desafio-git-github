let user = {
    name: 'Guilherme'
}

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1'
console.log(user.name)
user['name'] = 'Outro nome 2'
console.log(user.name)
const prop = 'name'
user[prop] = 'Outro nome 3'
console.log(user.name)
//Criando uma propriedade
user.lastName = 'Cabrine da Silva'
console.log(user)
//Deletando uma propriedade
delete user.name