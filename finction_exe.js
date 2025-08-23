// Write a function declaration multiply(a, b) that returns product.
// Write a function expression divide(a, b) that divides numbers.
// Write an arrow function isEven(num) that returns true if even, else false.
// Create a function greetUser(name = "Guest") that greets user with default fallback.

//1.
function mul(a,b){
    return a*b;
}

//console.log(mul(3,5));


//2.
const dev = function (a,b){
    return a/b
}
//console.log(dev(10,2))

//3.
//ye nhi hua mujhse
const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false



//4.
function greetUser(name = "user"){
    return 'welcome ' + name
}
console.log(greetUser('raju'))
console.log(greetUser())