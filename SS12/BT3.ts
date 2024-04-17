/* 
Tạo thể hiện (Instantiation):

Abstract class không thể tạo thể hiện trực tiếp, trong khi class có thể.
Phương thức trừu tượng (Abstract methods):

Abstract class có thể chứa phương thức trừu tượng mà không cần triển khai. Nhưng nếu một lớp chứa ít nhất một phương thức trừu tượng, nó phải được khai báo là abstract.
Class không có bất kỳ phương thức trừu tượng nào.

*/
abstract class People{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    displayInfo():void{
        console.log("name",this.name);
    }
}
class Workker extends People{
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
class Manager extends People{
    subject:string;
    constructor(name:string,subject:string){
        super(name);
        this.subject=subject;
    }
    displayInfo(): void {
        console.log("subject",this.subject);
        console.log("name",this.name);
    }
}
let std1=new Workker("dung",12);
let peo1-new People("dung");// abstracts class ko thể tạo 1 đối tượng trực tiếp