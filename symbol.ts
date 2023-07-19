let key1: symbol = Symbol(1)
let key2: symbol = Symbol(1)

let obj = {
    [key1]: 'value',
    [key2]: 'value',
    key: 'value',
}

for (let key in obj) {
    console.log(key) // key
}

console.log(Object.keys(obj)) // [ 'key' ]

console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(1), Symbol(1) ]

console.log(Reflect.ownKeys(obj)) // [ 'key', Symbol(1), Symbol(1) ]