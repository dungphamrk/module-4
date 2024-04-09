let parseInput=(element: number|string|boolean|null|undefined):void=>{
    console.log(Object.prototype.toString.call(element));
}
let numSS8=1;
let strSS8="12";
let booleanSS8=true;
let nullSS8=null;
let undefinderVar=undefined;
parseInput(nullSS8);
parseInput(booleanSS8);
parseInput(numSS8);
parseInput(undefinderVar);
parseInput(strSS8);