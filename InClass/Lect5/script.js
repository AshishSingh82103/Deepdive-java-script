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



let myFunction = function (newValue1, newValue2) {
    try {
        // Do some - thing
        // throw Error('somethig got missprinited');
        let result = newValue1 + newValue2;
        return result;
    } catch (error) {
        console.log('error caught by users');
    }
}
let finalResult = myFunction(20, 30);
console.log(finalResult); // 50

let insure1 = function(vauleX, valueY) {
    
}