// ----------- Hoisting => Functions and varibles declartions are hoisted ---------
// console.log(a , "Hey there"); // undefined Hey there
// var a = 25;

// console.log(b, "Hey there"); // error given because b is not defined(temporal dead zone)
// let b = 25;

// console.log(c, 'Hey there'); // error given because c is not defined(temporal dead zone).
// const c = 25;

//  =========== Start debugging execute ==============
var a = 12;
console.log(a);

function sum(a, b) {
    let c = a + b
    return c;
}

const result = sum(1, 2);
console.log(result);