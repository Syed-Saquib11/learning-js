// function sayHi() {
//   console.log(this);
// }

// sayHi();
//console.log(this);


//what will this log
const car = {
  brand: "Toyota",
  showBrand: function() {
    console.log(this.brand);
  }
};

car.showBrand();  //  -----> toyota



//2. predict output
function show() {
  console.log(this);
}

show(); //---> {}

/*3. Fix this so it prints the user’s name:
const user = {
  name: "Ali",
  greet: () => {
    console.log("Hello " + this.name);
  }
};

user.greet();*/

const user = {
  name: "Ali",
  greet: () => {
    console.log("Hello " + user.name);
  }
};

user.greet("Ali");


const user = {
  name: "Ali",
  greet: function() {
    console.log("Hello " + this.name);
  }
};