// Primitive

// 7 Types : String, Number, Bollean, null, undefined, Symbol, BigInt.

const Name = "Alok";
const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const is = Symbol("123");
const anotherId = Symbol("123");

console.log(is === anotherId);

// Reference (Non Primitive)

// objects, Array,  Function

const heros = ["Alok", "Aman", "Ankit"]; // Object

const myFunction = function () {
  console.log("Hello World");
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>................................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Stack (Primitive) , Heap (Non-Primitive)

// Stack => The Stack is used for static memory allocation, primarily for storing primitive types and function calls. It's a simple, last-in, first-out (LIFO) structure, making it very fast to access.
let MyName = "Alok Kumar"; // Primitive type stored in the Stack.

let anotherName = MyName; // A copy of the value is created in the Stack.
anotherName = "Alok Malik"; // Changing the copy does not affect the original.

console.log(MyName); // Alok Kumar
console.log(anotherName); // Alok Malik

// Heap => The Heap is used for dynamic memory allocation, where objects and arrays (non-primitive types) are stored. Unlike the Stack, the Heap is more complex and slower to access, as it allows for flexible memory allocation.
let userOne = {
  //The reference to this object is stored in the Stack.
  email: "user@google.com",
  upi: "user@ybl",
}; // The actual object data is stored in the Heap.

let userTwo = userOne; // userTwo references the same object in the Heap.
userTwo.email = "alok@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne); // { email: 'alok@google.com', upi: 'user@ybl' }
console.log(userTwo); // { email: 'alok@google.com', upi: 'user@ybl' }
