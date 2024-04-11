var Employee = /** @class */ (function () {
    function Employee(company, name, phone) {
        this.phone = phone;
        this.company = company;
        this.name = name;
    }
    Employee.prototype.displayInfo = function () {
        console.log("company:", this.company);
        console.log("name:", this.name);
        console.log("phone:", this.phone);
    };
    return Employee;
}());
var employ = new Employee("blabal", "dung", 12391238);
employ.displayInfo();
