abstract class Employee {
    protected name:string;
    protected role:string;
    abstract calculateSalary ():void
}
class internEmployee extends Employee{
    private workHour:number;
    constructor(a:number){
        super()
    }
    calculateSalary(): void {
        console.log(30.000 * this.workHour ); 
    }
}
class officialEmployee  extends Employee{
    private overtimeWage :number;
    constructor(a:number){
        super()
    }
    calculateSalary(): void {
        console.log(20000000 + this.overtimeWage); 
    }
}
let a1=new internEmployee(123);
let a2= new officialEmployee(455);
a1.calculateSalary();
a2.calculateSalary();