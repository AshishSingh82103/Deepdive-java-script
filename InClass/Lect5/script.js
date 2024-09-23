// var a = 12;
// var b = 13;

// function abc() {
//     var a = 100;
//     console.log(a); // 100
//     console.log(b); // 13
// }

// abc();
// console.log(a); // 12
// console.log(b); // 13

// ============ try and catch(debugg the code) ========================>
    console.log('hello');

function sum(a, b) {
    //  Do something 
    // throw Error('Refernce Error due to non aligmnet'); 
    return a + b;

}
let result = sum(10, 20);
console.log(result);

var a = 10;
console.log(a);


let items = 34;
console.log(items);

let constVariable = "valueIsExistingUser";
console.log(constVariable); // valueIsVarible
let valueIstrue = false;
if(valueIstrue === true) {
    console.log("hello is user the name"); // Nothing is find from it's execution context
}
console.log("hello User"); // hello User

let arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2

// for(let i = 0; i <= arr.length; i++) {
//     console.log(arr);
// }

// "git checkout -b BTS-6-sample-resolve-api-timeout-issues" 

// let promiseOne = new Promise((resolve, reject) => {
//     let items = "valuedetremination";
//     setInterval(() => {
//         if(items != String) {
//             console.log("is frameWorking");
//             resolve();
//         } else {
//             console.log("API TimeOut issue")
//             reject('error');
//         }
//     }, 2000)

// })
// promiseOne
// .then((getFecth) => {
//     console.log("is frameWorking", getFecth);
// })
// .catch((error) => {
//     console.log("API TimeOut issue", error)
// })
// .finally(() => {
//     console.log("Execution is finally over");
// })


let userLoggedIn = true;
let userId = "singhashish832109tcs@gmail.com";
let password = "Singh@82103";