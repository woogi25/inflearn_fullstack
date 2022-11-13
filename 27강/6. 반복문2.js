// let i = 1;

// while(i <= 10) {
//     console.log("안녕");
// //  i = i + 1;
//     i++;
// }

// let i = 1;
// while (i <= 50){
//     if(i % 5 == 0){
//         console.log(i);
//     }
//     i++;
// }


// let i = 1;

// while(i <= 10) {
//     console.log("안녕");
// //  i = i + 1;
//     i++;
// }

// let i = 1;
// while (i <= 50){
//     if(i % 5 == 0){
//         console.log(i);
//     }
//     i++;
// }


// for(let i = 1; i <= 10; i++){
//     console.log("안녕");
// }

// for(let i = 1; i <= 50; i++) {
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }

const arr = [5,6,7,8];

for (let index in arr) {
	console.log(arr[index]);
}
// for ~ in : arr -> index 하나씩 대입
for (let item of arr) {
	console.log(item);
}
//  for...of 는 배열의 반복에서 사용되고, for...in 은 객체의 반복에서 사용된다.

const jsonArr = {email: "aaa", password: "bbb"};

for (let key in jsonArr) {
	console.log(jsonArr[key]);
}

// break 예제
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);
}