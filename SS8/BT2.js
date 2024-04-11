"use strict";
let validatePerson = (obj) => {
    return typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj.address === 'object';
};
let testTrue = {
    name: "dung",
    age: 12,
    address: { city: "hanoi" }
};
let testFalse = {
    name: 111,
    age: 12,
    address: "bánmdl"
};
console.log(validatePerson(testFalse));
console.log(validatePerson(testTrue));
