"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employee =
/*#__PURE__*/
function () {
  function Employee(company, name, phone) {
    _classCallCheck(this, Employee);

    this.phone = phone;
    this.company = company;
    this.name = name;
  }

  _createClass(Employee, [{
    key: "displayInfo",
    value: function displayInfo() {
      console.log("company:", this.company);
      console.log("name:", this.name);
      console.log("phone:", this.phone);
    }
  }]);

  return Employee;
}();

var employ = new Employee("blabal", "dung", 12391238);
employ.displayInfo();