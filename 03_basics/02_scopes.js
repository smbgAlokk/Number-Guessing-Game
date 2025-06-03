let a = 10;
const b = 20;
var c = 30;

if (true) {
  let a = 40;
  const b = 50;
  var c = 60;
}

console.log(a); // 10
console.log(b); // 20
console.log(c); // 60

// Nested Scope

function one() {
  const username = "Alok";

  function two() {
    const website = "alok.com";
    console.log(username);
  }
  //   console.log(website); => This line gives Error becouse it is unable to access the website from function two().

  two();
}

one();

// +++++++++++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

// console.log(addTwo(5)); => This gives error becouse the function is holded by a variable and give error becouse it is not hoisted
const addTwo = function (num) {
  return num + 2;
};
