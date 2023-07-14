//  字符串类型
let str: string = 'songbaicheng'

console.log(str)

// 数字类型
let notANumber: number = NaN; // Nan
let num: number = 123; // 普通数字
let infinityNumber: number = Infinity; // 无穷大
let decimal: number = 6; // 十进制
let hex: number = 0xf00d; // 十六进制
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制

// 布尔类型
let booleand1: boolean = true //可以直接使用布尔值
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值

console.log(booleand1)
console.log(booleand2)

// 空值类型
function voidFn(): void {
    console.log('test void')
}

voidFn()

// Null和undefined类型
let u: undefined = undefined;
let n: null = null;
