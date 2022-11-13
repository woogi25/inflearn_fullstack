const a = 10;

if (a < 10) {
    console.log("a는 10보다 작다.");
}
else if (a == 10){
    console.log("a는 10이다.");
}
else {
    console.log("a는 10보다 크거나 같다.");
}

// 0, "", undefined는 false로 취급

const  num = 100;

if(num % 2 == 1){
    console.log("홀수");
}
else if(num % 2==0){
    console.log("짝수");
}
