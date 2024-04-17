function mergeObjects<T extends object[] >(arr: T): object {
    if (arr.length === 0) {
        return {};
    }
    const [first, ...rest] = arr;
    return { ...first, ...mergeObjects(rest) };
}

let object1 = { 
    a: 1, 
    b: {}, 
    c: 2, 
    d: [3, 4] ,
    w:5,
};
let object2 = { 
    a: 5, 
    b: { 
        c: 6, 
        d: [7, 8], 
        e: {} 
    }, 
    g: 10, 
    f: 9 
};
console.log(mergeObjects<object[]>([object1,object2]));

