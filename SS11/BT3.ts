class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    displayInfo():void{
        console.log("name",this.name);
    }
}
class Student extends Person{
    private id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
    }
    displayInfo(): void {
        console.log("id",this.id);
        console.log("name",this.name);
    }
}
let std1=new Student("dung",12);
std1.displayInfo();