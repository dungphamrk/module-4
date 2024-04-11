"use strict";
let anyVar;
let unknownVar;
anyVar = 10;
unknownVar = "Hello";
let value1 = anyVar; // OK vì anyVar có thể là bất kỳ kiểu dữ liệu nào
let value2 = unknownVar; // Lỗi vì kiểu unknown không được xác định trước
if (typeof unknownVar === "number") {
    let value3 = unknownVar; // OK vì unknownVar đã được kiểm tra kiểu dữ liệu
}
console.log(value1); // In ra 10
