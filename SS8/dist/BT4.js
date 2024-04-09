var square = function (element) {
    if (typeof element === 'number') {
        return Math.pow(element, 2);
    }
    else {
        return element.map(function (num) { return Math.pow(num, 2); });
    }
};
console.log(square(2));
console.log(square([1, 2, 3]));
