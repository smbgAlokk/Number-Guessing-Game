// const tinderUser1 = new Object() => // This is an Singleton Object

const tinderUser = {}; // This is an non Singleton object

tinderUser.id = "123abc";
tinderUser.name = "Alok";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "alok@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Alok",
      lastName: "Kumar",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2, obj3 };
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3);    // Correct way to join the objects, and the {} in the initial is the good use practice for giving the 'Target' of the new Joined Object
// console.log(obj4);

// Spread Operator
const obj4 = { ...obj1, ...obj2, ...obj3 }; // Best way to Join The Objects
console.log(obj4);

const users = [
  {
    id: 1,
    email: "df@gmail.com",
  },
  {
    id: 1,
    email: "df@gmail.com",
  },
  {
    id: 1,
    email: "df@gmail.com",
  },
  {
    id: 1,
    email: "df@gmail.com",
  },
  {
    id: 1,
    email: "df@gmail.com",
  },
];

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged")); // false
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
