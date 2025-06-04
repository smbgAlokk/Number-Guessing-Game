// if

// if (condition) {
//    Code to execute if the condition is true
// } else {
//    Code to execute if the condition is false
// }

/* 

Key points:
The if statement can be used without an else clause.
else if statements can be chained to check multiple conditions.
The else block is executed only if all previous if and else if conditions are false.
The conditions can use any logical operators (==, !=, <, >, <=, >=, &&, ||, !).
The code blocks are enclosed in curly braces {}.


*/

function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}

checkValue(1, 2); // Output: a is 1 and b is 2
