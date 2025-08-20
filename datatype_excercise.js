/* 1. Predict the output

console.log(typeof 99);
console.log(typeof "99");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

// Number // correct
// String // correct
// 1 // boolean, not 1
// 0 // undefined
// 0 // object:*/

/* 2. Create variables for each primitive type (number, string, boolean, undefined, null, symbol, bigint) and console.log them.

let number = 10
console.log(typeof number)
let name = "raju"
console.log(typeof name);
let IsLoggedIn = false;
console.log(typeof IsLoggedIn);
let c;
console.log(typeof c);
let y = null;
console.log(typeof y);
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // --> this didnt worked
*/


/* 3. What will happen here? Why?

let a = "10";
let b = 5;
console.log(a + b);
console.log(a - b);

1) 105 ---> since a is string and b is integer here both of them are taken as string
2) 5 ---> unlike 1st question here catenation of strings are not possible so both are taken as integers/numbers*/




