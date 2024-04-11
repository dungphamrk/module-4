class Vehicle{
    protected name:string;
    protected speed:number;
    protected id:number;
    private examplesB5:number;
    constructor(name:string,id:number,speed:number,examplesB5=1){
        this.speed=speed;
        this.name=name;
        this.id=id;
    }
    showSpeed():void {
        console.log("speed:",this.speed);
    }
    speedUp():number{
        return this.speed+10;
    }
    speedDown():number{
        return  this.speed-10;
    }
}
class Bycicle extends Vehicle{
    private gear:number;
    constructor(name:string,speed:number,id:number,gear:number){
        super(name,speed,id)
        this.gear=gear;
    }
    printInfo(){
        console.log(this.name);//Có thể truy cập từ lớp con với protected
       // console.log(this.examplesB5);//Ko thể truy cập từ lớp con với private
    }
}
let vehice1=new Bycicle("bla",123,32,5);
let vehice2=new Vehicle("bla",123,32);

vehice1.showSpeed();
vehice1.speedDown();
vehice1.showSpeed()
vehice1.speedUp();
vehice1.showSpeed();



