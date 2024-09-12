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

// ============ try and catch(debugg the code) ========================
console.log('hello');

function sum(a, b) {
    //  Do something 
    throw Error('Refernce Error due to non aligmnet'); 
    return a + b;

}
let result = sum(10, 20);
console.log(result);

var a = 10;
console.log(a);

function sum(num1, num2) {
    return num1 + num2;
}

let result1 = sum(5, 10);
console.log(result1); // 15

let promise = new Promise((resolve, reject) => {
    setInterval(() => {
        let items = null;
        if(items != null) {
            console.log("Execution phase is completed");
            resolve("Ececuted");

            

        } else {
            reject("Error");
        }
    }, 2000)
})
promise
.then((username)=>{
    console.log(username, "Execution phase is completed");
})
.catch((error)=>{
    console.log(error, 'error');
})
.finally(()=> {
    console.log("FInal getting resopnse");
});
