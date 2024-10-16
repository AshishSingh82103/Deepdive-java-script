// var a = 1;
// a = 2;

// let b = 2;
// b = 3;

// const c = 4;
// c = 5; // this is illegal

// ------------- ---------- execution context -------- ---------------
//  var => 
//  let => 
//  const => 


// ---------- ------------ --- Scope --- -------------  ---------------

// Rule No.1 => The java-script file its self global.
// Rule No.2 => Scope of var => Global and functional
// Rule No. 3 => Var dosen't care about {}
//  King rule => var has the scope of execution context

// ------------scope- var -variable-----------------

// var a = 12;  // global 
// console.log(a); // 12

// if(true) {
//     var c = 10;
//     console.log(a); // 12 if the parent scope have the variable the the child scope will also have the access
//     console.log(c); // 10
// }
// console.log(c); 

//  -------------   -----   ----     let and const ------  ----    -----------------

//  ======>1. let and const have a scope of {}
// ======>2. let and const have block scope like we have it with (int, char, String)

// let d = 13; // global
// console.log(d); // 13


// if(true) {
//     console.log(d); // 13
//     let e = 23;
//     console.log(e); // 23
// }
// // console.log(e); // error

// const a = 12; // global
// console.log(a); // 12

// if(true) {
//     console.log(a); // 12
//     const b = 13;
//     console.log(b); // 13
// }
// console.log(b); // error

// var a = 12;
// console.log(a); // 12

// function abc() {
//     var a = 13;
//     console.log(a); // 13

// }

// abc();
// console.log(a); //12


// function abc() {
//     let a = 1;
//     let b = 2;
//     // return undefined; if we will not write this code js will injected automatically
// }
// let res = abc();
// console.log(res); // undefined


// var a = 12;
// console.log(a); // 12

// if(true) {
//     var a = 13;
//     console.log(a); // 13
// }

// console.log(a); // 13

// function abc() {
//     var a = 12;
//     console.log(a); // 12
// }

// abc();
// console.log(a); // 13


// var a = 12;
// console.log(a); // 12

// if(true) {
//     var a = 13;
//     console.log(a); // 13
// }

// console.log(a); // 13

// function abc() {
//     var a = 12;
//     console.log(a); // 12
//     return a;
// }

// let result = abc();
// console.log(result); // 12
// console.log(a); // 13

console.log(a);
var a = 12;

abc();

function abc() {
    console.log('hello');
    console.log(a);

    var a = 19;
    console.log(a);
}
console.log(a);









 























