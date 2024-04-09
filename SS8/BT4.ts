let square=(element:number|number[])=>{
    if (typeof element==='number') {
        return element**2;
    }else{
        return element.map((num)=> num**2);
    }
}
console.log(square(2));
console.log(square([1,2,3]))