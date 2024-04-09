interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
}

const employee: Employee = {
    name: "dung",
    age: 20,
    employeeId: "1231231"
};

console.log(employee.name); 
console.log(employee.age); 
console.log(employee.employeeId); 
