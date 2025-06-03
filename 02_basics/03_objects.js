// Singleton
// Object.create

// objext literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Alok",
  [mySym]: "mykey1",
  age: 22,
  location: "Delhi",
  email: "alok@smbg@gmail.com",
  lastLoggedInDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email); // alok@smbg@gmail.com
// console.log(JsUser["email"]); // alok@smbg@gmail.com
// console.log(JsUser[mySym]);

JsUser.email = "aloksmbg9984@gmail.com";
// console.log(JsUser.email); // change the email

// Object.freeze(JsUser); // Freeze the Whole Object
JsUser.email = "aloksmbg99@gmail.com";
// console.log(JsUser);

// Greeting

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());
