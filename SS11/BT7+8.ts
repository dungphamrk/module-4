class Account {
    protected accountNumber:number;
    protected balance:string;
    constructor(accountNumber:number,balance:string){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(number:number):void{
        this.accountNumber+=number;
    }
    withdraw(number:number):void{
        if (number>this.accountNumber) {
            console.log("tien trong tai khoan hien ko du");
        }else {
            console.log("rut thanh cong");
            this.accountNumber-=number;
        }
    }
}
class SavingsAccount extends Account{
    private interestRate:number;
    constructor(a:number,b:string,rate:number){
        super(a,b);
        this.interestRate=rate;
    }
    calculateInterest ():number{
        return this.accountNumber*this.interestRate;
    }
}
let account=new SavingsAccount(123,"true",12/100);
console.log(account.calculateInterest());
//b8
class CheckingAccount  extends Account {
    private overdraftLimit :number;
    constructor(a:number,b:string,c:number){
        super(a,b)
        this.overdraftLimit=c;
    }
    withdraw(number: number): void {
        if (number>this.overdraftLimit) {
            console.log("tien trong tai khoan hien ko du");
        }else {
            console.log("rut thanh cong");
            this.accountNumber-=number;
        }
    }
}
let testB8=new CheckingAccount(123,"123",333);
testB8.withdraw(888);
