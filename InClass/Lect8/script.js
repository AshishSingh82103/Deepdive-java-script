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
function loggin(callBackFunc) {
    // log
    console.log('loggin'); // loggin
    callBackFunc(1, 2);
}

function sum(a, b) {
    console.log(a + b); // 3
    return a + b;
}
loggin(sum); 





