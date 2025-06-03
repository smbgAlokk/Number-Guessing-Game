function MyName() {
  console.log("A");
  console.log("L");
  console.log("O");
  console.log("K");
}

// MyName;   => // this is the 'Reference'
MyName(); // Calling the function

// Methode - 1
function addTwoNumbers1(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers1(63, 342); // 405

// Methode - 2
function addTwoNumbers2(num1, num2) {
  return num1 + num2;
}

let result = addTwoNumbers2(234, 24);
console.log(result); // 258

// Method - 3
// For the condition if nothing will pass in argument then will we handle that error like this.
function loginUserMessage(username) {
  if (!username) {
    /* !username and username === undefined  Both are the same thing*/
    console.log("Please enter your username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage());

// Method - 4
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(63, 3, 43, 142));

// Method - 5
const user = {
  username: "Alok Kumar",
  price: 99,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and the course Price is ${anyObject.price}`
  );
}

handleObject(user);

// Method - 6

const myNewArr = [200, 300, 400, 500];

function handleArray(getArr) {
  return getArr[1];
}

console.log(handleArray(myNewArr));
