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
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, price, brand) {
        var _this = _super.call(this, name, price) || this;
        _this._brand = brand;
        return _this;
    }
    return Electronics;
}(Product));
var e1 = new Electronics("dung", 123123, 123);
console.log(e1.brand);
