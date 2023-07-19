// 基础泛型
let count = <T>(a: T, b: T): T[] => {
    return [a, b]
}

count(1, 2)
count('1', '2')

// 默认泛型
let additon = <T = number>(a: T, b: T): T[] => {
    return [a, b]
}

additon(1, 2)
additon('1', '2')

// 泛型约束
let sums = <T extends number>(a: T, b: T) => {
    return a + b
}

sums(1, 2)
// sums('1', '2') // 类型“string”的参数不能赋给类型“number”的参数

interface Len {
    length: number
}

let getLength = <T extends Len>(a: T) => {
    console.log(a.length)
}

getLength('1111')
getLength([1, 2, 3, 4])
// getLength(123) // 类型“number”的参数不能赋给类型“Len”的参数

let objection = {
    name: 'songbaicheng',
    age: 23
}

let fun = <T extends object, K extends keyof T>(obj: T, key: K): void => {
    console.log(obj[key])
}

// fun(obj, age)