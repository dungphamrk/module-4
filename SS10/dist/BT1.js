var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.company = company;
        this.name = name;
        this.year = year;
    }
    Vehicle.prototype.displayInfo = function () {
        console.log("name:", this.name);
        console.log("year:", this.year);
        console.log("company:", this.company);
    };
    return Vehicle;
}());
var vehice1 = new Vehicle("bla", 123, "blaaaaaaaaaaaaaaaaaa");
console.log(vehice1.company);
vehice1.displayInfo();
