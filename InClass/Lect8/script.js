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

// abc
// ƒ () {
//     console.log('hey there');
// }

// abc();
// VM172:2 hey there
// undefined
 









