class Student{
    email:string;
    id:number;
    age:number;
    constructor(id:number,email:string,age:number){
        this.age=age;
        this.id=id;
        this.email=email;
    }
    displayInfo():void {
        console.log("id:",this.id);
        console.log("email:",this.email);
        console.log("age:",this.age);
    }
}
let arrStd:Student[]=[];
arrStd.push(new Student(1,"1",1));
arrStd.push(new Student(2,"2",2));
arrStd.push(new Student(3,"3",3));
console.log(arrStd);
