// Array

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(1, 2, 3, 4);

myArr.push(6);
myArr.pop(); // pop out the last value from the array

myArr.unshift(9); // add the value at the start of the array
myArr.shift();

// console.log(myArr.includes(9));

const newArr = myArr.join();
// console.log(newArr); // Convert The Whole Array into the String

// console.log(myArr);

//--------------------------------------------------------------------------------------------------------->

// Slice And Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // Not manupulate the array just give the output as value

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // Splice manupulate the whole Array and cut the portion out of the array
console.log("C", myArr);

console.log(myn2);
