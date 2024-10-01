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


function sum(a, b) {
    try {
        throw Error("Refernce from the error");
        let result = a + b;
        return result;
    } catch(error) {
        console.log(error, "error caught");
    }
}
let finalResult = sum(10, 3);
console.log(finalResult);

let resolve1 = new Object(
    {
        newResource: "resolve",
        fetchingresopnse: "reject response",
        api: "https://api.github.com/users/ashishsingh82103",
    }
)
console.log(resolve1.fetchingresopnse);