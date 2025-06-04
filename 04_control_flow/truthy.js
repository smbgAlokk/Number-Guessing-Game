const userEmail1 = "a@gmail.com";
const userEmail2 = "";
const userEmail3 = [];

if (userEmail1) {
  console.log("Got the userEmail1");
} else {
  console.log("Email not found");
} // Got the userEmail1

if (userEmail2) {
  console.log("Got the userEmail2");
} else {
  console.log("Email not found");
} // Email not found

if (userEmail3) {
  console.log("Got the userEmail3");
} else {
  console.log("Email not found");
} // Email not found

/*
falsy values:-
null, undefined, 0, -0, BigInt 0n, NaN, "" (empty string), false

truthy values:-
 "0", "false", " ", [], {}, function(){}


*/

if (userEmail3.length === 0) {
  console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

/*
1.false == 0 
true

2.false == ""
true

3. 0 == ""
true
*/

// Nullish Coalescing Operator (??): null Undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

let val2;
val2 = null ?? 10;
console.log(val2); // 10

let val3;
val3 = undefined ?? 10;
console.log(val2); // 10

// Terniary Operator => condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
