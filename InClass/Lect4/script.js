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

// ------------scope- var -variable-----------------
var a = 12;
console.log(a); // 12


if(true) {
    var c = 10;
    console.log(a); // 12 if the parent scope have the variable the the child scope will also have the access
    console.log(c); // 10
}
console.log(c); //  10 in var variable scope is always working on as a global scope.


let d = 13;
console.log(d); // 13

// -------------Scoping let-variable------------------
if(true) {
    console.log(d); // 13
    let e = 23;
    console.log(e); // 23
}
// console.log(e); // error

var constant = 34;
console.log(constant); // 34
if(true) {
    console.log(constant); // 34
}

let variableDeclare = "Infinte";
switch(variableDeclare){
    case 1:
        console.log("breakValue");
    break;

    case 2 :
        console.log("Search engine operation");
    break;

    case 3:
        console.log("Performance review");
    break;

    case 4:
        console.log("Git Execution context");
    break;

    default:
        console.log("Expextin Error");
    break;
}






















