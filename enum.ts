// 正常枚举
enum Color1 {
    RED,
    BLUE,
    YELLOW,
    GREEN
}

console.log(Color1.RED) // 0
console.log(Color1.BLUE) // 1
console.log(Color1.YELLOW) // 2
console.log(Color1.GREEN) // 3

// 递增枚举 & 自定义枚举
enum Color2 {
    RED = 2,
    BLUE,
    YELLOW = 6,
    GREEN
}

console.log(Color2.RED) // 2
console.log(Color2.BLUE) // 3
console.log(Color2.YELLOW) // 6
console.log(Color2.GREEN) // 7

// 字符串枚举
enum Color3 {
    RED = 'red',
    BLUE = 'blue',
    YELLOW = 'yellow',
    GREEN = 'green'
}

console.log(Color3.RED) // red
console.log(Color3.BLUE) // blue
console.log(Color3.YELLOW) // yellow
console.log(Color3.GREEN) // green

// 异构枚举
enum isRight {
    YES = 1,
    NO = 'no'
}

console.log(isRight.YES) // 1
console.log(isRight.NO) // no

// 反向映射
enum Type {
    SUCCESS,
    ERROR
}

let value = Type.SUCCESS
let key = Type[value]

console.log(`key:${key}`, `value:${value}`) // value:0 key:SUCCESS

// 反向映射编译成js
// var Type;
// (function (Type) {
//     Type[Type["SUCCESS"] = 0] = "SUCCESS";
//     Type[Type["ERROR"] = 1] = "ERROR";
// })(Type || (Type = {}));
// var value = Type.SUCCESS;
// var key = Type[value];
// console.log("key:".concat(key), "value:".concat(value));