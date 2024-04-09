var calculateArea = function (obj) {
    if ('sideLength' in obj) {
        return Math.pow(obj.sideLength, 2);
    }
    else if ('radius' in obj) {
        return Math.PI * Math.pow(obj.radius, 2);
    }
    else {
        throw new Error("Invalid object type");
    }
};
var testSquare = {
    sideLength: 123
};
console.log(calculateArea(testSquare));
