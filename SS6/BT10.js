"use strict";
function add(x, y) {
    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid ";
        }
        else {
            y = parseFloat(y);
        }
    }
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid ";
        }
        else {
            x = parseFloat(x);
        }
    }
    return x + y;
}
function subtract(x, y) {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid ";
        }
        else {
            x = parseFloat(x);
        }
    }
    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid ";
        }
        else {
            y = parseFloat(y);
        }
    }
    return x - y;
}
function multiply(x, y) {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid ";
        }
        else {
            x = parseFloat(x);
        }
    }
    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid ";
        }
        else {
            y = parseFloat(y);
        }
    }
    return x * y;
}
function divide(x, y) {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid ";
        }
        else {
            x = parseFloat(x);
        }
    }
    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid ";
        }
        else {
            y = parseFloat(y);
        }
    }
    if (y === 0) {
        return "Division by zero";
    }
    return x / y;
}
console.log("Addition:", add(100, 2));
console.log("Subtraction:", subtract(100, 2));
console.log("Multiplication:", multiply(100, 2));
console.log("Division:", divide(100, 2));
console.log("Addition with string :", add('100', '2'));
console.log("Subtraction with string :", subtract('100', '2'));
console.log("Multiplication with string :", multiply('100', '2'));
console.log("Division with string :", divide('100', '2'));
console.log("Invalid :", add('abc', 2));
console.log("Invalid :", subtract(100, 'def'));
