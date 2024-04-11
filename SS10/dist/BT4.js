var VehicleBT4 = /** @class */ (function () {
    function VehicleBT4(name, year, company, id) {
        this.company = company;
        this.name = name;
        this.year = year;
        this.id = id;
    }
    VehicleBT4.prototype.displayInfo = function () {
        console.log("name:", this.name);
        console.log("year:", this.year);
        console.log("company:", this.company);
    };
    return VehicleBT4;
}());
var vehiceBT4 = new VehicleBT4("dung", 123, "áds", 2);
console.log(vehiceBT4);
vehiceBT4.id = 10; //Lỗi do đã có readonly khi khởi tạo thuộc tính
