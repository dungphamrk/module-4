type NumberOrStringOrArray = number | string | any;

const checkInput = (input: NumberOrStringOrArray): number | void => {
    if (typeof input === 'number') {
        return input ** 2; 
    } else if (typeof input === 'string') {
        return input.length; 
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        console.log("Invalid input type");
    }
}

console.log(checkInput(123)); 
console.log(checkInput("vval")); 
console.log(checkInput([1, 5, 3])); 
console.log(checkInput(true));
