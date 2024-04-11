class Shape{
    calculateArea(arg1: number, arg2?: number): number {
        if (arg2 === undefined) {
            return arg1 * arg1;
        } else 
            return arg1 * arg2;
    }
    //B10
    
    calculatePerimeter(width: number, height?: number): number {
        if ( height !== undefined) {
            return 2 * (width+height);
        }else return width**2;
    }
}
class Rectangle extends Shape{
    public height:number;
    public width:number;
    constructor(height:number,width:number){
        super();
        this.width=width;
        this.height=height;
    }

}
class Circle extends Shape{
    public radius:number;
    constructor(radius:number){
        super();
        this.radius=radius;
    }


}
let retang=new Rectangle(12,13);
let circle=new Circle(11);
console.log(retang.calculateArea(retang.width,retang.height));
console.log(circle.calculateArea(circle.radius));
//B10
console.log(retang.calculatePerimeter(retang.width,retang.height));
console.log(circle.calculatePerimeter(circle.radius));


