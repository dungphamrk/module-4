class Vehicle{
    name:string;
    year:number;
    company:string;
    constructor(name:string,year:number,company:string){
        this.company=company;
        this.name=name;
        this.year=year;
    }
    displayInfo():void {
        console.log("name:",this.name);
        console.log("year:",this.year);
        console.log("company:",this.company);
    }
}
let vehice1=new Vehicle("bla",123,"blaaaaaaaaaaaaaaaaaa");
console.log(vehice1.company);
vehice1.displayInfo();