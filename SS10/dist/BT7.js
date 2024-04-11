var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculateCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var circle1 = new Circle(12);
console.log(circle1.calculateArea());
console.log(circle1.calculateCircumference());
