//----------basics-------//
let str1 = 'Saquib' //-----> strings can be intiated by "", '', or ``
let str2 = "welcome"
//let str = `Hi ${str1}, ${str2}`//------> `` is used for multiline statements or string interpolation
//console.log(str);


/*-------important nproperty -------------------------------------
1. lenght of string includesa spaces too
2. strings are immutable ---> we can access different string element by index but we cant modify them --> every method leads to a new string
*/



//------------- important methods----------------------//
//1 LENGTH
let word = "JavaScript";
//console.log(word.length); //--> returns length of string

//2 METHODS TO EXTRACT FROM STRINGS
let text = "JavaScript";
// console.log(text.charAt(0));   // ----> uses index number to select element but when out of range gives empty str(" ") as a result
// console.log(text[1]);          // ----> uses index number to select element but when out of range gives undefined ---> therefore a bit modern but unsafe(lil)
// console.log(text.slice(0, 4)); // ----> takes a portion off a string ---> when given neg number it starts of backward ---> when startindex is bigger than endindex it returns empty string ---------------------------------------> preferred when neg indexs are involved or when strcit behaviour is needed
// console.log(text.substring(4)); // ---> takes a portion off a string ---> when given neg number it treats it as 0 -------> when start index is bigger than endindex it changes them internally and returns a string nevertheless -> preferred when flexible behavior is fine
// console.log(text.substr(4, 6)); // ---> I DONT KNOW WHATS HAPPENING HERE

//3 CHANGING CASE
// console.log(text.toUpperCase()); 
// console.log(text.toLowerCase()); 

// //4. SEARCHING WITHIN STRING
// console.log(text.indexOf("Script"));  // 4
// console.log(text.includes("Java"));   // true
// console.log(text.startsWith("Java")); // true
// console.log(text.endsWith("Script")); // true

// //5. MODIFIYING STRING
// let str = "Hello World";
// console.log(str.replace("World", "JS")); // "Hello JS"
// console.log(str.concat("!!!"));          // "Hello World!!!"
// console.log(str.trim());                 // removes spaces

//6. SPLITTING & JOINING
let data = "apple,banana,grape";
let arr = data.split(","); // ["apple", "banana", "grape"]
//console.log(arr[1]);

//console.log(arr.join(" | ")); // "apple | banana | grape"

//---------- sPECIAL CHARACTERS -----------------
//console.log("He said: \"JavaScript is fun!\""); 
// console.log('It\'s a sunny day');
// console.log("Line1\nLine2"); // newline
// console.log("Tab\tSpace");   // tab
