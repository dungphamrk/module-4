"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["MONDAY"] = "Monday";
    WeekDays["TUESDAY"] = "Tuesday";
    WeekDays["WEDNESDAY"] = "Wednesday";
    WeekDays["THURSDAY"] = "Thursday";
    WeekDays["FRIDAY"] = "Friday";
    WeekDays["SATURDAY"] = "Saturday";
    WeekDays["SUNDAY"] = "Sunday";
})(WeekDays || (WeekDays = {}));
let weekDays = WeekDays.MONDAY;
console.log(weekDays);
