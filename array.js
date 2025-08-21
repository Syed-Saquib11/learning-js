/* Arrays:
* are the backbone of storing & managing collections in JS.
* is ordered list like object used to store multiple values in a single variable
* think of it like a box */

let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";

//let fruits = ["apple", "banana", "mango"];
//console.log(fruits);

//---------------------------------------------------------creatng array
//let arr = [1, 2, 3];

//let arr = new Array(1, 2, 3);
let arr2 = new Array(5); // creates array of length 5 (empty slots!)


//----------------------------------------------------accessing and modifying elements ----------------------
let colors = ["red", "blue", "green"];

//console.log(colors[0]); // "red"
colors[1] = "yellow";   // modify element
//console.log(colors);    // ["red", "yellow", "green"]





//---------------------------------------------------- Common Methods -----------------------------------------------------//

//Adding and Removing
//let nums = [1, 2, 3];

nums.push(4);    // add at end → [1,2,3,4]
nums.pop();      // remove last → [1,2,3]

nums.unshift(0); // add at start → [0,1,2,3]
nums.shift();    // remove first → [1,2,3]


//Combining/Slicing
let a = [1, 2];
let b = [3, 4];

//console.log(a.concat(b));   // [1,2,3,4]
//console.log(a.slice(0, 1)); // [1]  (non-destructive)

//Splicing
let arr = [1, 2, 3, 4];
arr.splice(1, 2, "X", "Y"); 
// remove 2 elements from index 1, insert "X","Y"
//console.log(arr); // [1, "X", "Y", 4]


//Searching
let fruits = ["apple", "banana", "mango"];

//console.log(fruits.indexOf("banana")); // 1
//console.log(fruits.includes("grape")); // false


//Iterations: ------------------> NEEDS ELLABORATION HERE
let nums = [1, 2, 3];

nums.forEach(n => console.log(n));  // 1,2,3
let doubled = nums.map(n => n * 2); // [2,4,6]
let even = nums.filter(n => n % 2 === 0); // [2]
let sum = nums.reduce((acc, n) => acc + n, 0); // 6

