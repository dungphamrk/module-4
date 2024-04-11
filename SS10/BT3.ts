class Employee{
    public name:string;
    protected company:string;
    private phone:number;
    constructor(company:string,name:string, phone:number){
        this.phone=phone;
        this.company=company;
        this.name=name;
    }
    
    displayInfo():void {
        console.log("company:",this.company);
        console.log("name:",this.name);
        console.log("phone:",this.phone);
    }
}
let employ= new Employee("blabal","dung",12391238);
employ.displayInfo();