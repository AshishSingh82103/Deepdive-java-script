// function loggin() {
//     // log
//     console.log('loggin');

// }

// function sum(a, b) {
//     return a + b;

// }

// loggin();
// console.log(sum(2, 3));


// requirement -> need to log first then you need to add.
// function loggin(callBackFunc) {
//     // log
//     console.log('loggin'); // loggin
//     callBackFunc(1, 2);
// }

// function sum(a, b) {
//     console.log(a + b); // 3
//     return a + b;
// }
// loggin(sum); 



// // calculator

// function calculator(operation) {
//     if(operation === 'add') {
//         return function(a, b) {
//             return a + b
//         }

//     }
// }
// calculator('add');


// 1. function declartion ---------------->
function add(a, b) {
    return a + b;
}
let rest = add(2,2);
console.log(rest);

// 2. function expression ---------------->

const sum = function(a, b) {
    return a + b;
}
 let result = sum(100, 2);
 console.log(result);


//  sum() diferentiate sum => browser result
// const abc = function() {
//     console.log('hey there');
// }

// abc o/p
// f () {
//     console.log('hey there');
// }

// abc(); o/p
// hey there
// undefined

// let abc = function() {
//     console.log('abc')
// }
// abc(); // abc
// abc = null;

// abc(); // abc is not a function
 

function abc() {
    console.log('abc')
}
var abc;
abc = function() {
    console.log('abc');
}

// -------- out-put ---------
// f () {
//     console.log('abc');
// }


// ----------- Arrow - function ------------

const sumArrow = (a, b) => {
    return a + b;
}
let resultArrow = sumArrow(3, 5);
console.log(resultArrow, 'Sum-Arrow'); // 8 Sum-Arrow


// ----------- call-back function -----------
function loggedIn(callBackFunction) {
    //  Please do work
    console.log('loggin');
    callBackFunction();

}

function join(a, b) {
    console.log(a + b);
    // return undefined; // hideen when we not give the return any value

}
loggedIn(join);








