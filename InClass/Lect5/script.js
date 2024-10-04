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
    console.log("hey there user how are you doing") // output-printed
    // screen uhhh something went wrong
   
}

}

let result = sum(10, 20);
console.log(result); // 30

let myFunc = function(newValue1, newValue2) {
    let userId = "832109";
    let password = "singh@82103";
    let login = true;
    throw Error("some message printed");
    let result = newValue1 + newValue2;
    return result;
}

let result1 = myFunc(10, 3);
console.log(result1);





