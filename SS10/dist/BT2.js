var Student = /** @class */ (function () {
    function Student(id, email, age) {
        this.age = age;
        this.id = id;
        this.email = email;
    }
    Student.prototype.displayInfo = function () {
        console.log("id:", this.id);
        console.log("email:", this.email);
        console.log("age:", this.age);
    };
    return Student;
}());
var arrStd = [];
arrStd.push(new Student(1, "1", 1));
arrStd.push(new Student(2, "2", 2));
arrStd.push(new Student(3, "3", 3));
console.log(arrStd);
