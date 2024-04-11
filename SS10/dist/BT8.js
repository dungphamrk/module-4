var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(5, 7);
console.log("Chu vi của hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Diện tích của hình chữ nhật:", rectangle1.calculateArea());
