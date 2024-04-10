var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var combineObjects = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
var obj1 = { tesst1: "value1", tesst2: 42 };
var obj2 = { tesst33: true, tesst44: ["value2", "value3"] };
var combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
