class Product{
    protected name:string;
    protected price:number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    getDescription(){
        console.log("name: ",this.name);
        console.log("price: ",this.price);
    }

}
class  Electronics extends Product{
    private _brand:number;
    constructor(name:string,price:number,brand:number){
        super(name,price);
        this._brand=brand;
    }
    public get brand() : number {
        return this._brand; 
    }
}
let e1=new Electronics("dung",123123,123);
console.log(e1.brand);
