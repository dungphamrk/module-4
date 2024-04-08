let fullName: string = "blabla";

let age: number = 40;

let job: string = "Engineer";

function printUserInformation(name: string, age: number, job: string): string {
  return `Name: ${name}, Age: ${age}, Job: ${job}`;
}

console.log(printUserInformation(fullName, age, job));
