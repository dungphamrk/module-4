let b2=<T>(arr:T[],index1:number,index2:number):T[]=>{
    if (index1<0||index2<0||index1>arr.length||index2>arr.length) {
        console.log("Invalid");
        return arr;
    }else{
    let newArr=[...arr]
    let temp= newArr[index1];
    newArr[index1]=newArr[index2];
    newArr[index2]=temp;
    return newArr;
    }
}
let arr=[1,2,3,4,5,6];
console.log(arr);
console.log(b2(arr,2,3));
