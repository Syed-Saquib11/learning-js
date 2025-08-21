//1. What will this print:
let arr = ["a", "b", "c"];
console.log(arr.length); //---->3 
console.log(arr[1]); // -------> a X --> obviously it will be b, i dont know what i was thinking then
arr.push("d"); 
console.log(arr); // -------------> ["a","b","c","d"]
arr.pop();
console.log(arr); // -------------> ["a","b","c"]

console.log("-----------------------------------------------------------------------------------------------------------");

// 2. Create an array of 5 numbers
let num = [1,2,3,4,5];
//Print the first and last element.
// console.log(num[0]&&num[4]);  ---> this was wrong, maybe console cannot do logical operation
console.log(num[0],num[4]);

//Add a number at the beginning.
num.unshift(0);

//Remove the last number
num.pop();
console.log(num);

console.log("-----------------------------------------------------------------------------------------------------------");

// 3. Predict
let nums = [1,2,3,4];
nums.splice(1,2,"X"); 
console.log(nums); //----> ["X","X",3,4] --> wrongit meant remove two values from index 1 so answer would be [1, x, x, 4] ----> this is wrong too sine array cannot have similar element twice therefore x can only appear once so answer will be [1, x, 4]

let data = ["apple","banana","mango"];
console.log(data.includes("banana"));//----> true
console.log(data.indexOf("grape"));//----> undefined ----> its showing -1 and i am clueless
console.log("-----------------------------------------------------------------------------------------------------------");
