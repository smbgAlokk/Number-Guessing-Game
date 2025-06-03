const Marvel = ["Thor", "IronMan", "Hulk"];
const DC = ["Supaerman", "flash", "Batman"];

// Marvel.push(DC);
// console.log(Marvel); // [ 'Thor', 'IronMan', 'Hulk', [ 'Supaerman', 'flash', 'Batman' ] ]

// const allHeros = Marvel.concat(DC);
// console.log(allHeros); // [ 'Thor', 'IronMan', 'Hulk', 'Supaerman', 'flash', 'Batman' ]

// Spread Oprator

const allNewHeros = [...Marvel, ...DC]; // Best Method
console.log(allNewHeros); //[ 'Thor', 'IronMan', 'Hulk', 'Supaerman', 'flash', 'Batman' ]

const anotherArr = [1, 2, 3, [4, 5, 6, [7, 8, [9]]]];
const newAnotherArr = anotherArr.flat(Infinity);
console.log(newAnotherArr); //[ 1, 2, 3, 4, 5,  6, 7, 8, 9]

console.log(Array.isArray("Alok")); // false

// Array.from => Creates an array from an iterable object.
console.log(Array.from("Alok")); // [ 'A', 'l', 'o', 'k' ]
console.log(Array.from({ name: "Alok" })); // Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of => Returns a new array from a set of elements.

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.
