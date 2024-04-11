var Department = /** @class */ (function () {
    function Department(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department ID: " + this.id);
        console.log("Department Name: " + this.name);
    };
    return Department;
}());
