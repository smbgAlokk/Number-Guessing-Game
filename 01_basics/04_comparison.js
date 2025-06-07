console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comaprisons convert null to a number, treating it as 0.
// The equality check == checks if the values are equal, but also checks if the types are equal

// === Strict check

console.log("2" === 2); // false
