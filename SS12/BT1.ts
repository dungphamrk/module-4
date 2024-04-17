abstract class Animal{
    name :string;
    constructor(name:string){
        this.name=name;
    }
    abstract makeNoise():void;
    printName():void{
        console.log(this.name);
    }
}
class Cat extends Animal{
    override makeNoise(): void {
        console.log("meo meo");
    }
    constructor(a:string){
        super(a);
    }
}
class Dog extends Animal{
    override makeNoise(): void {
        console.log("gau gau");
    }
    constructor(a:string){
        super(a);
    }
}
let dog1=new Dog("blabla1");
dog1.makeNoise();
let cat1=new Cat("blabla2");
cat1.makeNoise();