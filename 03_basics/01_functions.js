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
