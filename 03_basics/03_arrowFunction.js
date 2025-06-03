const user = {
  username: "Alok",
  price: 999,

  welcomeMessage: function () {
    console.log(`Welcome, ${this.username}!`);
  },
};
// The 'this' keyword refers to the context where a piece of code, such as a function's body, is supposed to run. OR In JavaScript, this is a keyword that refers to the object that is currently executing the code. Its value is determined by how a function is called.
user.welcomeMessage();

user.username = "Sam";
user.welcomeMessage();

// function one() {
//   let username = "alok";
//   console.log(this.username); // undefined
// }

// one();

// const chai = function () {
//   let username = "alok";
//   console.log(this.username); // undefined
// };
// chai();

const chai = () => {
  let username = "alok";
  console.log(this);
};

chai(); // {}

// -------------------------------------------------------------------------------------------

// Arrow Functions

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(31, 43)); // 74

// When we use {} then we have to use 'return'

// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(31, 43)); // 74

const addTwo = (num1, num2) => ({ username: "Alok" });
