"use strict";
//  字符串类型
let str = 'songbaicheng';
console.log(str);
// 数字类型
let notANumber = NaN; // Nan
let num = 123; // 普通数字
let infinityNumber = Infinity; // 无穷大
let decimal = 6; // 十进制
let hex = 0xf00d; // 十六进制
let binary = 0b1010; // 二进制
let octal = 0o744; // 八进制
// 布尔类型
let booleand1 = true; //可以直接使用布尔值
let booleand2 = Boolean(1); //也可以通过函数返回布尔值
console.log(booleand1);
console.log(booleand2);
// 空值类型
function voidFn() {
    console.log('test void');
}
voidFn();
// Null和undefined类型
let u = undefined;
let n = null;
