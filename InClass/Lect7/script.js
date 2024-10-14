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

// let arr = [1, 2, 3, 4, 5];

// arr.push(6);

// console.log(arr);

// arr.pop();

// console.log(arr);


// ================== First-class Function ================

// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Examples
// Assigning a function to a variable
// js

// const foo = () => {
//   console.log("foobar");
// };
// foo(); // Invoke it using the variable
// foobar

//  we can pass function as an argurment inside the function as a value
// function calc(fn, val) {
//     console.log(fn);
//     console.log(val);
// }
// calc(sub, 1);

// function sum(num1, num2) {
//     return num1 + num2;
// }

// function sub(a, b){
//     return a - b
// }


let num1 = 12;
let num2 = 13;
function sum(a, b) {
    return a + b;
}
sum(num1, num2);

// I am passing this variable as an argument of sum

const funct = function(a, b) {
    return a + b;
}

const result = funct(1, 2);
console.log(result); // 3


// murcury --> weapons

// earth --> life support

// jupiter --> food rationd

// space ship method
function spaceship (func, num1, num2) {
    // check for auth
    // log
    console.log(num1, num2);
    if(num1 === 'Ashish') {
        func()
    } else {
        console.log('hacking detected');
    }
        
    func() 

    
    
}
// earthcheck
spaceship(lifeSupport, 'Ashish', 24);

function weapons() {
    // check for auth
    // log
}

function lifeSupport() {
    console.log('lifesupport')
}

function food() {
    console.log(food);
}