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

    
    try {
        // do something
        throw Error('Refernce Error due to non aligmnet'); 
        let c = a + b;
        return c;

    } catch(error) {
    console.log("hey there user how are you doing")
    // screen uhhh something went wrong
}

}

let result = sum(10, 20);
console.log(result); // 30


let myFunc = function(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log(myFunc(10, 5)); // 15


let result1 = 56;
console.log(result1);

let promise = new Promise((resolve, rejcet) => {
    let itemPhrase = null;
    setInterval(()=> {
        if(itemPhrase === null) {
            console.log("hey there user how are you doing");
            resolve();
        } else {
            rejcet(error)
        }
    }, 2000)
})
promise
.then((user) => {
    console.log("here is the")
})


