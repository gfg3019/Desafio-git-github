//Symbols
const uniqueId = Symbol('Hello')

//Well known symbols
Symbol.iterator

const arr = [1, 2, 3, 4, 5]
const str = 'Digital innovation one'

const obj4 = {
    values: [1, 2, 3, 4, 5],
    [Symbol.iterator](){
        let i = 0
        return {
            next: () =>{
                i++
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

for(let value of obj4){
    console.log(value)
}

//Generatos
function *hello() {
    console.log('Hello')
    yield

    console.log('From')
    yield

    console.log('Function')
}

const it = hello()
console.log(it.next())
console.log(it.next())
console.log(it.next())