console.log(1 % 3);

console.log(1 == 1);
console.log(1 != 1);
console.log(1 == "1");
//값만 비교

console.log(1 === 1);
console.log(1 === "1");
// ===, !== 는 데이터의 자료형 까지 비교

let option1 = 10 > 1;
let option2 = 2 == 3;

console.log(option1 || option2) //true
console.log(option1 && option2); // false
console.log(!option1); // false

let height = 175;
let goodweight = (height - 100) * 0.9;
console.log(`당신의 키는 ${height}cm이며 적정체중은 ${goodweight}kg입니다.`)