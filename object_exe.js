/*1.Create an object book with properties: title, author, year.

Print book.title.

Add a property pages.

Delete year.*/

let book = {
    title: "Sapiens",
    author: "YNH",
    year: 2006,
}

//console.log(book.title)

book.pages = 500;
delete book.year;
//console.log(book);
console.log('---------------------------------------------------------------');


/* 2. predict result */
let obj1 = { lang: "JS" };
let obj2 = obj1;
obj2.lang = "Python";
// console.log(obj1.lang); //------->  Python

/* 3. Given:

let car = { brand: "Tesla", model: "S", year: 2023 };


Print all keys.

Print all values.

Convert it into a JSON string.*/

let car = { brand: "Tesla", model: "S", year: 2023 };
console.log(Object.keys(car));
console.log(Object.values(car));

str = JSON.stringify(car);
console.log(str);
