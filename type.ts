// 联合类型
const getTel = (tel: number | string) => console.log(tel);

getTel('010-12345456')
getTel(123456)

// 交叉类型
interface OneType {
    first: string
}

interface TwoType {
    second: number
}

const mixType = (mix: OneType & TwoType) => console.log(mix)


mixType({ first: 'songbaicheng', second: 23 })

// 类型断言
let typeFn = (num: string | number) => console.log((num as string).length)

typeFn(123)
typeFn('123')