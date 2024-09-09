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

const a = 12; // global
console.log(a); // 12

if(true) {
    console.log(a); // 12
    const b = 13;
    console.log(b); // 13
}
console.log(b); // error























