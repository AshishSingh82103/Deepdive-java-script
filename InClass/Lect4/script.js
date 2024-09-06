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
console.log(c); //  10 


let d = 13;
console.log(d); // 13

if(true) {
    console.log(d); // 13
    let e = 23;
    console.log(e); // 23
}
// console.log(e); // erro

var constant = 34;
console.log(constant);
if(true) {
    console.log(constant);
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




















