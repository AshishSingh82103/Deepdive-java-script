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


// ---------- -- Scope -- ---------------

// Rule No.1 => The java-script file its self global.
console.log("abcd"); // abcd

var a = 12;
console.log(a); // 12


if(true) {
    var c = 10;
    console.log(a); // 12 if the parent scope have the variable the the child scope will also have the access
    console.log(c); // 10
}
console.log(c); // if the varible is define in the block scope and execution out side in the execution context will also have access to it.


let d = 13;
console.log(d);

if(true) {
    console.log(d);
    let e = 23;
    console.log(e);
}
console.log(e); // e is not defined 
















