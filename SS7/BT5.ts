let anyVar: any;
let unknownVar: unknown;

anyVar = 10;
unknownVar = "Hello";

let value1: number = anyVar; // OK vì anyVar có thể là bất kỳ kiểu dữ liệu nào
let value2: number = unknownVar; // Lỗi vì kiểu unknown không được xác định trước

if (typeof unknownVar === "number") {
    let value3: number = unknownVar; // OK vì unknownVar đã được kiểm tra kiểu dữ liệu
}

console.log(value1); // In ra 10
