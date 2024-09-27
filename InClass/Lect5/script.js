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


function add(num1 , num2) {
    // Do something
    try {
        throw Error('Refernce error due to non-aligment');
        let result = num1 + num2
        return result;
    } catch(error) {
        console.log("hey there user how are you doing");
    }
}
let sum1 = add(2, 3);
console.log(sum1);

function multiplie(product1, product2) {
        try {
            // Do Something
            throw Error("Expectation error due to non-aligment");
            let result = product1 * product2;
            return result;
        } catch(error) {
            console.log("Hey there user how to do resolve the issue") //
        }

}
let finalResult = multiplie( 10 * 3);
console.log(finalResult);

function devide( div1, div2) {
    try {
        // DO Something
        throw Error("Expectation error due to non-aligment");
        let result = div1 / div2;
        return result;
    } catch(error) {
        console.log('Hey there user how are you doing'); // result is ocnsdering here
    }
}
let finalResult2 = devide(25 / 5);
console.log(finalResult2);

// =========== m pecent resolve -------------

function division(divi1, divi2) {
    //  Do something
    try {
        throw Error('error handling server problem');
        let result = divi1 % divi2;
        return result;
    } catch(error) {
        console.log('hey there user how are you doing')
    }
}
console.log(division(24 % 2));

let promiseOne = new Promise((resolve, reject) => {
    setInterval(() => {
        // Do Something
        setInterval(() =>{
            let items_value = null;
            if(items_value != null) {
                resolve("Passing message");
                console.log("passing message by server issue");
            } else {
                reject();
            }
        }, 2000)

    })

})

promiseOne
.then((user) => {
    console.log('Hey there user Api getting resopnse',  user)
})
.catch((error) =>{
    console.log("Thorw error", error);
})
.finally((resolve) => {
    console.log("Finally resolve then some message printed"); // result printited here
})
