class Account9 {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(accountNumber: string) {
      this.accountNumber = accountNumber;
      this.balance = 0;
      this.history = [];
      this.status = "active";
  }
  deposit(money:number){
    if (money>0) {
      this.balance+=money;
      console.log("nap tien thanh cong");
    }else console.log("Invalid");
  }
  withdraw(money:number){
    if (money>0) {
      this.balance-=money;
      console.log("rut tien thanh cong");
    }else console.log("Invalid");
  }
  showHistory(){
    console.log("history:", this.history);
  }
  
  public set _status(v : string) {
    this.status = v;
  }
  
}
class SavingAccount extends Account9{
  interestRate:number;
  deposit(money:number){
    if (money>0) {
      this.balance+=money;
      console.log("nap tien thanh cong");
      let historist=`nap tien: ${money}`;
      this.history.push(historist);
    }else console.log("Invalid");
  }
  withdraw(money:number){
    if (money>0 &&money<=this.balance) {
      this.balance-=money;
      let historist=`rut tien: ${money}`;
      this.history.push(historist);
      console.log("rut tien thanh cong");
    }else console.log("Invalid");
  }
  constructor(accountNumber: string,rate:number) {
    super(accountNumber)
    this.balance = 0;
    this.history = [];
    this.status = "active";
    this.interestRate=rate;
}
}
let b9=new SavingAccount("1231281233",12);
b9.deposit(1245673);
b9.withdraw(123);
b9.showHistory();

//b10

class CheckingAccount extends Account9{
  overdraftLimit:number
  withdraw(money:number){
    if (money>0 &&money<=(this.balance+this.overdraftLimit)) {
      this.balance-=money;
      let historist=`rut tien: ${money}`;
      this.history.push(historist);
      console.log("rut tien thanh cong");
    }else console.log("Invalid");
  }
  constructor(accountNumber: string,rate:number) {
    super(accountNumber)
    this.balance = 0;
    this.history = [];
    this.status = "active";
    this.overdraftLimit=rate;
}
}
let b10=new CheckingAccount("1231281233",500);
b10.deposit(100);
b10.withdraw(123);
b10.showHistory();


// B11

class Bank{
  public name:string;
  private accounts:(Account9|CheckingAccount|SavingAccount)[];
  createAccount(acc:Account9|CheckingAccount|SavingAccount){
    this.accounts.push(acc);
  }
  showAccounts(){
    console.log(this.accounts);
  }
  constructor(name:string){
    this.name=name;
  }
  //b12
  banAccount(accountNumber:string){
    let banAccount= this.accounts.find(element => {
      return element.accountNumber===accountNumber
    });
    if (banAccount==undefined) {
      console.log("ko ton tai tai khoan do");
    }else
    banAccount._status="banner";
  }
  getAccount(accountNumber:string){
    let findedAccount= this.accounts.find(element => {
      return element.accountNumber===accountNumber
    });
    console.log(findedAccount);
  }
}
let bank=new Bank("dungBank");
bank.createAccount(b9);
bank.createAccount(b10);
bank.getAccount("1231281233");
