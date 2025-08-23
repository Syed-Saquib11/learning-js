/*1. Write a program that prints:

"Small" if number < 10

"Medium" if number between 10–20

"Large" if number > 20*/

let number = 11

if(number<10){
    console.log("Small")
}
else if(9<number<20){
    console.log("Medium");
}

else   console.log("Large")


console.log("------------------------------------------------------------------------------------------------------");






/* 2. Use a switch to log the day of the week (1 = Monday … 7 = Sunday). */

let day = 4

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong input");
}



console.log("------------------------------------------------------------------------------------------------------");


//3. Print numbers 1 to 10 but skip even numbers.

for (i=0; i<10; i++){
    if (i%2==0){
        continue;
    }
    else{
        console.log(i)
    }
}

console.log("------------------------------------------------------------------------------------------------------");


/* 4. Loop through this array and stop if "mango" is found:

const fruits = ["apple", "orange", "mango", "banana"];*/

const fruits = ["apple", "orange", "mango", "banana"];

for (let fruit of fruits){
    if (fruit==="mango"){
        console.log(`found at ${fruit}`);
        break;
    }
    else{
        continue;
    }
}