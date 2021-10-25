//Factory 
/*Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são 
consideras funções Factory(fábrica)*/

function FakeUser(){
    return{
        name: 'Genisson',
        lastName: 'Gomes'
    }
}

//Factory
const user = FakeUser()