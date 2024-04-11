class VehicleBT4{
    public name:string;
    protected year:number;
    private company:string;
    readonly id:number;
    constructor(name:string,year:number,company:string,id:number){
        this.company=company;
        this.name=name;
        this.year=year;
        this.id=id;
    }
    displayInfo():void {
        console.log("name:",this.name);
        console.log("year:",this.year);
        console.log("company:",this.company);
    }
}
let vehiceBT4=new VehicleBT4("dung",123,"áds",2);
console.log(vehiceBT4);
vehiceBT4.id=10;//Lỗi do đã có readonly khi khởi tạo thuộc tính