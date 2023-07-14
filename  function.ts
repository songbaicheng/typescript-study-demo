// 基础类型参数
function add(a: number, b: number): number {
    return a + b
}

const sum = (a: number, b: number): number => a + b

console.log(add(1, 2))
console.log(sum(3, 2))

// 对象参数
interface body {
    name: string
}

const people = (a: body): void => console.log(a.name)

people({ name: 'songbaicheng' })