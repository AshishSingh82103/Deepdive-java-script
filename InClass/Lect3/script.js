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


// sum()
// function sum() {
//     console.log('inside the sum function');
// }
// sum();

//  let and const hoisted in temporal dead zone

// console.log(a); // error
// let a = 12;
// console.log(a); // 12


// console.log(name); // error
// const name = "Ashish";
// console.log(name); // Ashish


// ----------Basic Math(assignments, operators)----------------
// console.log(1 + 2); // 3
// console.log(1 > 2); // false

// console.log(10 % 2); // 0

// console.log(Math.pow(2, 3)); // 8
// console.log(2 ** 3); // 8


// // const val1 = "123" + 2;

// // console.log(val1); // 1232

// const val1 = +"123" + 2;
// console.log(val1); // 125

// --------- -------- ----------- Comparision(<, >, >=, <=, ==, !=, ===)------- ------------- ---------------
// console.log(1 > 2); // false

// const val = 1;
// console.log(val == 1) // true

// console.log(1 == "1"); // true
 
// console.log( 1 === "1"); // false it is checking the value and it's type


/*
   few programings...
*/

//  if else

// if(true) {
//     //  do something
// } else {
//     // do something
// }

// Loops

// for loops
// let arr = [1, 2, 3, 4]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// while loop
// let j = 0;
// while( j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// for in => loops over object and its properties

// for of => loops over arrays and (ittrable objects) => array is default ittrable object.

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let element of arr1) {
//     console.log(element);
    
// }

// arr1.forEach((item) =>{
//     console.log(item);
// })


// let obj = {
//     name: "8324ashish",
//     class: 9,
//     age: 99,
//     canDrive: false
// }

// for (const key in obj) {
//    console.log(key);
//    console.log(obj[key]);
// }

// Switch

// switch(condition) {
//     case 1:
//         // do something
//         console.log("1");
//         break;
//     case 2:
//         // do somethig
//         console.log("2");
//         break;

//     default:
//         console.log("do something else");

// }

// //  Grouping of switch case...

// switch(condition) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("podium position");
//         break;
//     case 4:
//         console.log("consolidation position");
//         break;

//     default:
//         console.log("participated in race");
//         break;

// }

/*
  functions
*/

// function sum(a, b) {
    
//     return a + b;
// }

// let ans = sum(2,  3);
// console.log(ans);


// let c = 12;
// function sum(num1, num2) {
//     return num1 + num2 + c;
// }

// console.log(sum(2, 3))


// default values

//  function sum (a, b = 1) {
//     return a + b
//  }

//  let result = sum(99)
//  console.log(result); // 100

// let result = sum(99, 2);
// console.log(result); // 101


// => what a function returns...
// function sum (a, b) {
//     return "Ashish"
// }
//  let result = sum(1, 2);
//  console.log(result); // Ashish

function sum (a, b) {
    console.log(a, b)
    // return undefined java-script behinde the secene
}
 let result = sum(1, 2);
 console.log(result, "result is here"); // undefined result is here

 

 