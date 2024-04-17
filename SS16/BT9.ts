function flattenArray<T>(arr: (T | any[])[]): T[] {
    let newArr: T[] = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            newArr.push(...flattenArray(element));
        } else {
            newArr.push(element as T);
        }
    }
    return newArr;
}
let arr9: (number |any[])[] = [1, [2 ,[3, 4], 5], 6];
console.log(flattenArray<number>(arr9));
