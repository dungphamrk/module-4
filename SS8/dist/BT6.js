var printNumberOrArray = function (element) {
    if (typeof element === 'number') {
        console.log(element);
    }
    else {
        element.forEach(function (num) { return console.log(num); });
    }
};
printNumberOrArray(2);
(printNumberOrArray([1, 2, 3]));
