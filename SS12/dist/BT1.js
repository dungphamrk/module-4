var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.printName = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(a) {
        return _super.call(this, a) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log("meo meo");
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(a) {
        return _super.call(this, a) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("gau gau");
    };
    return Dog;
}(Animal));
var dog1 = new Dog("blabla1");
dog1.makeNoise();
var cat1 = new Cat("blabla2");
cat1.makeNoise();
