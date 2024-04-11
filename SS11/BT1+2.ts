class Employee{
    public name:string;
    protected company:string;
    private phone:number;
    constructor(company:string,name:string, phone:number){
        this.phone=phone;
        this.company=company;
        this.name=name;
    }
    getPhone():number{
        return this.phone;
    }
    displayInfo():void {
        console.log("company:",this.company);
        console.log("name:",this.name);
        console.log("phone:",this.phone);
    }
}
class Manager extends Employee{
    private teamSize:number;
    constructor(company:string,name:string, phone:number,teamSize:number){
        super(company,name,phone);
        this.teamSize=teamSize;
    }
    displayInfo(): void {
        console.log("company:",this.company);
        console.log("name:",this.name);
        console.log("phone:",this.getPhone());
        console.log("teamSize:",this.teamSize);
    }
}
let employ= new Employee("blabal","dung",12391238);
employ.displayInfo();