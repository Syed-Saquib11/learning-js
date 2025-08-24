/*Write a program that parses a string into JSON safely.

If parsing works → log the object.

If it fails → log "Invalid JSON" instead of crashing.

Write a safeDivide(a, b) function that throws an error if b is 0.

Catch it with try...catch and log a friendly message.

Use finally to log "Operation Complete" no matter what happens.*/



//1.
let data = '{ "city": "Hyderabad", "country": "India" }';

try {
  let obj = JSON.parse(data);
  console.log("Parsed object:", obj);
} catch (err) {
  console.log("Invalid JSON:", err.message);
} finally {
  console.log("Operation Complete");
}

console.log("---------------------------------------------------------------------------")

//2.
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(safeDivide(10, 2));  // ✅ 5
  console.log(safeDivide(10, 0));  // ❌ error
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Operation Complete");
}



//3. 
//alwasy runn