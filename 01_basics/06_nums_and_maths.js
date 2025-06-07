// Numbers

const score = 500;
console.log(score); // 500

const newScore = new Number(500);
console.log(newScore); // Number { 500 }

console.log(newScore.toString());

console.log(newScore.toString().length);

console.log(newScore.toFixed(1)); // 500.0

const otherNumber = 123.8676254;
console.log(otherNumber.toPrecision(4)); // 123.9

const Hundreds = 1000000000;
console.log(Hundreds.toLocaleString());

//<------------------------------------------------------------------------------------------------------------------->

// Maths

console.log(Math.abs(-5)); // 5
console.log(Math.round(5.6)); // 6
console.log(Math.ceil(5.1)); // 6
console.log(Math.floor(5.8)); // 5
console.log(Math.max(13, 4, 24, 12, 134)); // 134
console.log(Math.min(13, 4, 24, 12, 134)); // 4

console.log(Math.random()); // Random number between 0 & 1
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 12;
const max = 55;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // This operation gives you the result Number in between min and max values i.e, 10 & 20.
