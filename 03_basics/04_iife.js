// Immediately Invoked Function Expressions (IIFE)
// A function that is defined and immediately invoked when it is created.
// This is useful for creating a new scope and avoiding polluting the global namespace.

(function chai() {
  console.log("Db Connected");
})(); // Db Connected
// For executing two or more cosecutive IIFEs then the previous IIFE must be end with ; otherwise next IIFE will not execute.

((userName) => {
  console.log(`Db Connected and Owner is ${userName}`);
})("Alok"); // Db Connected and Owner is Alok
