// task-24 More Conditional Tests:

let apple = "apple";
let uppercaseApple = "APPLE"
let ten = 10;
let twenty = 20;
let fruits = ["apple","mango","banana"];

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");

console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("Is apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("Is ten is equal to twenty?");
console.log( ten == twenty);

console.log("Is ten is not equal to twenty?");
console.log( ten != twenty);

console.log("Is ten is greater than twenty?");
console.log(ten > twenty);

console.log("is ten is less than twenty?");
console.log(ten < twenty);

console.log("Is ten greater than or equal to 5?");
console.log(ten >= 5);

console.log("Is twenty is less than or equal to 10?");
console.log(20 <= 10);

console.log("twent is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("twent is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

console.log("20 is greater than 50 OR twenty is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("20 is greater than 50 OR twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);

console.log("Is mango is inculde in my fruits array?");
console.log(fruits.includes("mango"));

console.log("Is mango not inculde in my fruits array?");
console.log(!fruits.includes("mango"));