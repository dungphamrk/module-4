 class Product{
    protected name:string;
    protected price:number;
    public printInfo(): void{
        console.log(this.name, "Name");
        console.log(this.price, "Price  ");
    }
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
}
class Electronics extends Product{
    private _brand:number;
    constructor(name:string,price:number,brand:number){
        super(name,price);
        this._brand=brand;
    }
    printInfo(): void {
        console.log(this._brand, "Brand");
        console.log(this.name, "Name");
        console.log(this.price, "Price  ");
    }
}
let e1=new Electronics("dung",123123,123);
console.log(e1.printInfo());
let p1=new Product("dung2",213)
