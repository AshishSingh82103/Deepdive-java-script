// ----------- Hoisting => Functions and varibles declartions are hoisted ---------
// console.log(a , "Hey there"); // undefined Hey there
// var a = 25;

// console.log(b, "Hey there"); // error given because b is not defined(temporal dead zone)
// let b = 25;

// console.log(c, 'Hey there'); // error given because c is not defined(temporal dead zone).
// const c = 25;

//  =========== Start debugging execute ==============
// var a = 12;
// console.log(a);

// function sum(a, b) {
//     var c = a + b
//     return c;
// }

// const result = sum(1, 2);
// console.log(result);

// --------------- Arrays ----------------

let arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr);

arr.pop();

console.log(arr);


// ================== First-class Function ================
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Examples
// Assigning a function to a variable
// js

const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar