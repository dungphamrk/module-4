interface Student {
    id: number;
    name: string;
    class: string;
}

function filterStudentsByClass(students: Student[], className: string): void {
    console.log( students.filter(student => student.class === className))
}

const students: Student[] = [
    { id: 11, name: "A", class: "A" },
    { id: 22, name: "B", class: "G" },
    { id: 33, name: "C", class: "F" },
    { id: 44, name: "D", class: "G" },
    { id: 55, name: "E", class: "A" }
];


filterStudentsByClass(students, "A");
filterStudentsByClass(students, "G");
filterStudentsByClass(students, "F");

