/// 객체 Create
let userInfo = {
    email: "dummy@dummy.com",
    password: "a1234"
}

// 객체 Read
console.log(userInfo);
console.log(userInfo.email);
console.log(userInfo["email"]);

// 객체 Update
userInfo.email = "updated";
console.log(userInfo.email);

// 객체 Delete
delete userInfo.email;
console.log(userInfo);