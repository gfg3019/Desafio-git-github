function fn(){
    return 'code here'
}

const arrowFn = () => 'Code Here'
const arrowFn2 = () => {
    //Mais de um expressão
    return 'Code here'
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

//Receber parâmetros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())
logFnResult(fn)