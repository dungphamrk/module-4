"use strict";
const combineObjects = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const obj1 = { tesst1: "value1", tesst2: 42 };
const obj2 = { tesst33: true, tesst44: ["value2", "value3"] };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
