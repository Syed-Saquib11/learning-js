//rewrite all the coeds without if esle

/*1. check if number is pos or not:
function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}*/

function isPos(a){
    return (a >0)
}
// console.log(isPos(3))
// console.log(isPos(-3))

/*2 check if string is empty
function isEmpty(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}*/

function isEmpty(str){
    return str == 0
}
console.log(isEmpty(""))
console.log(isEmpty('asda'))



/* 3. check if user is adult
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}*/

function isAdult (a){
    return a>18
}
// console.log(isAdult(14));
// console.log(isAdult(41));


/*4. check if divisible by 5
function isDivisibleBy5(num) {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}*/

function isDivisible(a){
    return a%5==0
}
// console.log(isDivisible(25));
// console.log(isDivisible(22));

