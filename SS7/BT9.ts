function Prime(n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function checkArrayForPrimeNumbers(arr: number[]): boolean {
    for (const num of arr) {
        if (!Prime(num)) {
            return false;
        }
    }
    return true;
}

console.log(checkArrayForPrimeNumbers([1,3,4,2,7,9,32,43,12,45]));

console.log(checkArrayForPrimeNumbers([3,5,7,11,13])); 
