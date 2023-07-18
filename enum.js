// 正常枚举
var Color1;
(function (Color1) {
    Color1[Color1["RED"] = 0] = "RED";
    Color1[Color1["BLUE"] = 1] = "BLUE";
    Color1[Color1["YELLOW"] = 2] = "YELLOW";
    Color1[Color1["GREEN"] = 3] = "GREEN";
})(Color1 || (Color1 = {}));
console.log(Color1.RED); // 0
console.log(Color1.BLUE); // 1
console.log(Color1.YELLOW); // 2
console.log(Color1.GREEN); // 3
// 递增枚举 & 自定义枚举
var Color2;
(function (Color2) {
    Color2[Color2["RED"] = 2] = "RED";
    Color2[Color2["BLUE"] = 3] = "BLUE";
    Color2[Color2["YELLOW"] = 6] = "YELLOW";
    Color2[Color2["GREEN"] = 7] = "GREEN";
})(Color2 || (Color2 = {}));
console.log(Color2.RED); // 2
console.log(Color2.BLUE); // 3
console.log(Color2.YELLOW); // 6
console.log(Color2.GREEN); // 7
// 字符串枚举
var Color3;
(function (Color3) {
    Color3["RED"] = "red";
    Color3["BLUE"] = "blue";
    Color3["YELLOW"] = "yellow";
    Color3["GREEN"] = "green";
})(Color3 || (Color3 = {}));
console.log(Color3.RED); // red
console.log(Color3.BLUE); // blue
console.log(Color3.YELLOW); // yellow
console.log(Color3.GREEN); // green
// 异构枚举
var isRight;
(function (isRight) {
    isRight[isRight["YES"] = 1] = "YES";
    isRight["NO"] = "no";
})(isRight || (isRight = {}));
console.log(isRight.YES); // 1
console.log(isRight.NO); // no
// 反向映射
var Type;
(function (Type) {
    Type[Type["SUCCESS"] = 0] = "SUCCESS";
    Type[Type["ERROR"] = 1] = "ERROR";
})(Type || (Type = {}));
var value = Type.SUCCESS;
var key = Type[value];
console.log("key:".concat(key), "value:".concat(value));
