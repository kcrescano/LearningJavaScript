// Function Declaration
function greeting() {
  console.log('Hello world!');
}

// Anonymous Functions
// Function Expression
let greeting = function(){
  console.log('Hello world!');
}

// Arrow Function
greeting = () => {
  console.log('Hello world!');
}
greeting = () => 
  console.log('Hello world!');

// Function Constructor
greeting = new Function("console.log('Hello world!')");

// Immediate execution
(() => {
  console.log('Hello world!');
})();

(() => console.log('Hello world!'))();
