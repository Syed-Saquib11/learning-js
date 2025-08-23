// declaring function
function greet(name) {
  return "Hello, " + name;
}

//console.log(greet("Ali")); // "Hello, Ali"

//parameter
function add(a,b) {
  return a + b;
}

// console.log(add(5, 3)); // 8
// console.log(add(5)); // NaN



// default values
function add1(a = 0, b = 0) {
  return a + b; //-------------------------------> return returns result
}

// console.log(add1(5, 3)); // 8
// console.log(add1(5)); // 5