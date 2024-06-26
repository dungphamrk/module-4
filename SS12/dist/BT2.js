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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.displayInfo = function () {
        console.log("name", this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, id) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.displayInfo = function () {
        console.log("id", this.id);
        console.log("name", this.name);
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.displayInfo = function () {
        console.log("subject", this.subject);
        console.log("name", this.name);
    };
    return Teacher;
}(Person));
var std1 = new Student("dung", 12);
std1.displayInfo();
