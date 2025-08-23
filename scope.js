//lexical scope

// let fruit = "apple"; // global box

// function outer() {
//   let color = "red"; // outer box

//   function inner() {
//     console.log(fruit); // ✅ found in global box
//     console.log(color); // ✅ found in outer box
//   }

//   inner();
// }

// outer()

//closure
function makeCounter() {
  let count = 0; // private variable

  return function() {
    count++;
    return count;
  };
}


const counter = makeCounter(); // makeCounter runs once

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3







function greetMaker(name) {
  return function() {
    console.log("Hello " + name);
  };
}

const greetAli = greetMaker("Ali"); 
greetAli(); // "Hello Ali"