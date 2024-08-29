// Declartion => let a and assignment => a= 12
// let a = 12;

// ---------------- -------- --------Hoisting ------- ---------- --------------
//  => Variables and function  Declartion  are hosted.(it will treat function and variables if they are on the top of file)

// => in java 
// System.out.pirntln(a); // Give an error
// int a = 12;
// System.out.pirntln(a); // 12

'use strict'
// => in java-script
// console.log(a) // undefined
// var a = 12;
// console.log(a) // 12


sum()
function sum() {
    console.log('inside the sum function');
}
// sum();

//  let and const hoisted in temporal dead zone

// console.log(a); // error
// let a = 12;
// console.log(a); // 12


// console.log(name); // error
// const name = "Ashish";
// console.log(name); // Ashish


// ----------Basic Math(assignments, operators)----------------
console.log(1 + 2); // 3
console.log(1 > 2); // false

console.log(10 % 2); // 0

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8


const val1 = "123" + 2;

console.log(val1); // 1232

