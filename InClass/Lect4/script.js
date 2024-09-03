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

// Rule No.1 => The file will be executed in the same time
console.log("abcd"); // abcd

var a = 12;
console.log(a); // 12


if(true) {
    var c = 10;
    console.log(a); // 12
    console.log(c); // 10
}
console.log(c);


let d = 13;
console.log(d);

if(true) {
    console.log(d);
    let e = 23;
    console.log(e);
}
console.log(e); // error e is not defined













