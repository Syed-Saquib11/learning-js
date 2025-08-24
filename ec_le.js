/*1.Exercise 1: Scope Chain
let a = 10;

function first() {
  let b = 20;
  function second() {
    let c = 30;
    console.log(a + b + c); // What will this log?
  }
  second();
}

first();


Question: Why can second() access a and b even though they’re not inside it?*/


/*2. Exercise 2: Closure Basics
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // ?
counter(); // ?
counter(); // ?


Question: Why does count persist across multiple calls?*/





//-------------------------------------------------------------above two questions were simple and easy but blow two wale nhi hua mujhse so had to take some help-------------------

console.log(this); // ?

function normalFunc() {
  console.log(this);
}

const obj = {
  method: function() {
    console.log(this);
  }
};

normalFunc();  // ?
obj.method();  // ?


/*4. Exercise 4: Lexical this with arrow functions
const obj = {
  num: 100,
  arrowFunc: () => {
    console.log(this.num);
  },
  regularFunc: function() {
    console.log(this.num);
  }
};

obj.arrowFunc();   // ?
obj.regularFunc(); // ?


Question: Why does the arrow function behave differently from the regular function */


/*Exercise 4: Lexical this with arrow functions
const obj = {
  num: 100,
  arrowFunc: () => {
    console.log(this.num);
  },
  regularFunc: function() {
    console.log(this.num);
  }
};

obj.arrowFunc();   // ?
obj.regularFunc(); // ?


Question: Why does the arrow function behave differently from the regular function */