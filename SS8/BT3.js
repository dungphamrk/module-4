"use strict";
let calculateArea = (obj) => {
    if ('sideLength' in obj) {
        return obj.sideLength ** 2;
    }
    else if ('radius' in obj) {
        return Math.PI * obj.radius ** 2;
    }
    else {
        throw new Error("Invalid object type");
    }
};
let testSquare = {
    sideLength: 123,
};
console.log(calculateArea(testSquare));
