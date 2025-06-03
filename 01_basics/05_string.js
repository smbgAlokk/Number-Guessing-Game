const Name = "Alok";
const Age = 25;

console.log(`My Name is ${Name} and my age is ${Age}`);

// Another way of Declaring a string.

const YourName = new String("AlokKumar");

console.log(YourName[0]); // A
console.log(YourName.__proto__); // {} => In JavaScript, __proto__ is a property of an object that references its prototype. It's a way to access the object that serves as the blueprint for the current object, from which it inherits properties and methods.

console.log(YourName.length); // 10

console.log(YourName.charAt(2)); // o
console.log(YourName.indexOf("o")); // 2

const newString = YourName.substring(0, 4);
console.log(newString); // Alok

const anotherString = YourName.slice(-8, 2); // we can give negative values also in Slice method
console.log(anotherString);

/*-------------------------------------------------------------------------------------------------------------------------*/

// Trim & Replace

const newStringOne = "    Alok   ";

console.log(newStringOne); //       Alok
console.log(newStringOne.trim()); // Alok  => It trims the all extra white spaces
console.log(newStringOne.trimStart()); // Alok   => It trims the only spaces before string
console.log(newStringOne.trimEnd()); //       Alok  => It trims the only spaces after string

const url = "https://alok.com/alok%20kumar";
console.log(url.replace("%20", "%50")); // https://alok.com/alok%50kumar

console.log(url.includes("alok")); // true => its is case sensitive

/*-------------------------------------------------------------------------------------------------------------------------*/

// Slipt

console.log(url.split("/")); // [ 'https:', '', 'alok.com', 'alok%20kumar' ]
