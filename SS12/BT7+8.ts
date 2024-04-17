class Account {
  id: number;
  userName: string;
  password: string;
  isLogin: boolean;
  role: string;
  logout(): void {
    if (this.isLogin === true) {
      console.log("dang xuat thanh cong");
      this.isLogin = false;
    }
  }
  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }
}
class userAcc extends Account {
  status: string;
  constructor(id: number, userName: string, password: string, role: string, status: string) {
    super(id, userName, password, role);
    this.status = status;
}
  login(): void {
    if (this.status === "active") {
      console.log("dang nhap thanh cong");
      this.isLogin == true;
    } else if (this.status === "banned") {
      console.log("tai khoan dang bi khoa");
    }
  }
}
class adminAcc extends Account {
 
  constructor(id: number, userName: string, password: string, role: string) {
    super(id, userName, password, role);
  } 
  banUser(user: userAcc): void {
    user.status = "banned";
  }
}
let user1 = new userAcc(1, "user1", "pass123", "user", "active");
let admin1 = new adminAcc(2, "admin1", "adminpass", "admin");

user1.login();
user1.logout();
admin1.banUser(user1);
user1.login();
