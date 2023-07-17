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

// ts可以定义函数中this的类型，js中并不支持，如果要指定必须放在参数的第一位
interface human {
    occupations: string[]
    add: (this: human, occupation: string) => void
}

const zhangsan: human = {
    occupations: ['teacher'],
    add(this: human, occupation: string) {
        this.occupations.push(occupation)
    }
}

zhangsan.add('work')
console.log(zhangsan.occupations)