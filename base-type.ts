//  字符串类型
let str: string = 'songbaicheng'
let str1: string = `i
am
${str}`

console.log(str)
console.log(str1)

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

// 数组
let arr: number[] = [1, 2];
let arr1: Array<number> = [1, 2];

console.log(arr)
console.log(arr1)

// 元组
let x: [string, number];
x = ['Runoob', 1];

console.log(x[0]);
console.log(x[1]);

// 枚举
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;

console.log(Color.Blue)
console.log(Color[Color.Blue])
console.log(c)

// 空值类型
function voidFn(): void {
    console.log('test void')
}

voidFn()

// Null和undefined类型
let u: undefined = undefined;
let n: null = null;

// any
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
console.log(arrayList)

// Object
let o:Object = 123
let o1:Object = '123'
let o2:Object = []
let o3:Object = {}
let o4:Object = () => 123

let o5: object = {}

let nu: {} = {}
