//rest operator  e spread operator(...)
/**
 * O spread operator pode ser usado em strings, arrays, literal objects e objetos iteraveis
 * 
 */

/*const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply(...rest)
}

console.log(sum(5, 5, 5, 53, 45, 10))*/

const str = 'Digital Innovation One'
const arr = [1, 2, 3, 4]
function logArgs(...args){//Usando o rest operator
    console.log(args)
}

const arr2 = [...arr, 5, 6, 7]
logArgs(...str)//usando o spread operator
console.log(arr2)

//Destructuring Assignment
var [apple, banana, orange] = ['apple', 'banana', 'orange']
console.log(banana)

let obj3 = {
    name: 'genisson',
    props: {
        age: 29,
        favoriteColors: ['black', 'blue', 'yelow']
    }
}

let { name } = obj3
let { props: { age, favoriteColors: [color1, color2, color3] } } = obj3
console.log(name, age, color2)