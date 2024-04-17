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
/*
Tạo thể hiện (Instantiation):

Abstract class không thể tạo thể hiện trực tiếp, trong khi class có thể.
Phương thức trừu tượng (Abstract methods):

Abstract class có thể chứa phương thức trừu tượng mà không cần triển khai. Nhưng nếu một lớp chứa ít nhất một phương thức trừu tượng, nó phải được khai báo là abstract.
Class không có bất kỳ phương thức trừu tượng nào.

*/
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.displayInfo = function () {
        console.log("name", this.name);
    };
    return People;
}());
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, id) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    Worker.prototype.displayInfo = function () {
        console.log("id", this.id);
        console.log("name", this.name);
    };
    return Worker;
}(People));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        return _this;
    }
    Manager.prototype.displayInfo = function () {
        console.log("subject", this.subject);
        console.log("name", this.name);
    };
    return Manager;
}(People));
var std1 = new Worker("dung", 12);
std1.displayInfo();
