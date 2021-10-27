
//Arrow Functions
let obj = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000)
    }, 
    log: function log(value) {
        console.log(value)
    }
}

obj.showContext()

//Default Function Arguments

//lazy evaluation
function randomNuber(){
    return Math.random() * 10
}


function multiply(a, b = randomNuber()){
    return a * b
}

console.log(multiply(5))

//Enhanced Object Literals
let propName = 'teste'
let prop = 'Genisson Ferreira'
function method () {
    return 'methoddddd'
}

const obj2 = {
    prop,
    method,
    sum(a, b){
        return a + b
    },
    [propName + 'concat']: 'prop value'
}

console.log(obj2.prop)
console.log(obj2.method())
console.log(obj2)
