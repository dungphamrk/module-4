interface obj1 {
    tesst1: string;
    tesst2: number;
}

interface obj2 {
    tesst33: boolean;
    tesst44: string[];
}

type CombinedObject = obj1 & obj2;

const combineObjects = (obj1: obj1, obj2: obj2): CombinedObject => {
    return { ...obj1, ...obj2 };
}

const obj1: obj1 = { tesst1: "value1", tesst2: 42 };
const obj2: obj2 = { tesst33: true, tesst44: ["value2", "value3"] };

const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
