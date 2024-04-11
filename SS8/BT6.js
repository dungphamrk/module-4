"use strict";
let printNumberOrArray = (element) => {
    if (typeof element === 'number') {
        console.log(element);
    }
    else {
        element.forEach(num => console.log(num));
    }
};
printNumberOrArray(2);
(printNumberOrArray([1, 2, 3]));
