"use strict";
function filterStudentsByClass(students, className) {
    console.log(students.filter(student => student.class === className));
}
const students = [
    { id: 11, name: "A", class: "A" },
    { id: 22, name: "B", class: "G" },
    { id: 33, name: "C", class: "F" },
    { id: 44, name: "D", class: "G" },
    { id: 55, name: "E", class: "A" }
];
filterStudentsByClass(students, "A");
filterStudentsByClass(students, "G");
filterStudentsByClass(students, "F");
