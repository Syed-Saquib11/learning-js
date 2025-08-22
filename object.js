// let user = {
//   name: "Saquib",
//   age: 21,
//   isAdmin: true
// };
//console.log(user);

// let key = "speed";
// let car = {
//   brand: "Tesla",
//   [key]: "200km/h"
// };
// console.log(car.speed);// "200km/h"
// //console.log(car.key); // -----> result nhi dega
// console.log(car[key]); //----> ye dega

// let user = { name: "Ali", age: 25 };

// console.log(user.name);    // "Ali"  (dot notation)
// console.log(user["age"]);  // 25     (bracket notation)
// if(0){
// let key = "name";
// console.log(user[key]);    // "Ali"
// }
// else console.log('not available');

// let user = { id: 1, name: "Ali", age: 22, address: null };

// for (let key in user) {
//   console.log(key,user[key]);
// }
// console.log('\n');

// user.food = "";
// console.log("key" + "\t" + "values" + '\n'); // leaves one line gap
//console.log('\n'); -----> leaves two line gap

// for (let key in user) {
// ``console.log("key" + "\t," + "values");
//   console.log(key +  "\t" + user[key]);
// }
//console.log("Tab\tSpace"); 


// console.log('a');
// console.log('a');
// console.log('a');


let user = { name: "Ali", age: 22 };
let str = JSON.stringify(user); // object → JSON string
console.log(str); // '{"name":"Ali","age":22}'

let obj = JSON.parse(str); // JSON string → object
console.log(obj.name); // "Ali"
