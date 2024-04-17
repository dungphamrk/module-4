abstract class Quadrangle{
    protected width:number; 
    protected height: number;

    abstract calculatePerimeter():void
}
class Rectangle extends Quadrangle{
    constructor(a:number,b:number){
        super()
        this.width=a;
        this.height=b;
    }   
    override calculatePerimeter(): void {
        console.log(this.width*this.height);
    }
}
class Square  extends Quadrangle{
    constructor(a:number){
        super()
        this.width=a;
    }   
    override calculatePerimeter(): void {
        console.log(this.width**2);
    }
}
let t1=new Square(12);
t1.calculatePerimeter();
let t2= new Rectangle(12,20);
t2.calculatePerimeter();