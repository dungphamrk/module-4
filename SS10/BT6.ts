class Song{
    public readonly id:number;
    private name:string;
    private length:number;
    constructor(id:number, name:string,length:number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    setName(name:string){
       return this.name=name;
    }
    setLength(length:number){
        return this.length=length;
     }
  
}
let haha=new Song(1,"blabla",23);
haha.setLength(123);
console.log(haha);