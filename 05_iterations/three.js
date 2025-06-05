// for of

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //console.log(num);
}

const greeting = "Hello Wolrd!";

for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  //console.log(`Each char is ${greet}`);
}

// Maps => The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
map.set("UK", "United Kingdom");

console.log(map);

for (const Key of map) {
  console.log(Key);
}

/*
Output:

[ 'IN', 'India' ]
[ 'Fr', 'France' ]
[ 'UK', 'United Kingdom' ]
 */

for (const [Key, value] of map) {
  console.log(Key, ":-", value);
}

/*
Output:

IN India
Fr France
UK United Kingdom
*/
