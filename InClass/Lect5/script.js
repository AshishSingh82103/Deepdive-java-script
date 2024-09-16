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
    // throw Error('Refernce Error due to non aligmnet'); 
    return a + b;

}
let result = sum(10, 20);
console.log(result);

var a = 10;
console.log(a);

let itemIcons = 34;
// console.log();

console.log("execution form");
if(true) {
    console.log("execution will be commited in this rule");
} else {
    console.log("execution will not be committed not will exeplenary");
}

let promiseOne = new Promise((resolve, reject)=> {
    let items = null;
    setInterval(() =>{
        if( items === null) {
            console.log("No Items found");
            resolve("Error not getting find");
        } else {
            items = [1, 3]
            console.log("Items Found");
            reject(items, "Error", error); 
        }
    }, 2000)
})
promiseOne
.then((result) => {
    console.log(result, "result");

})
.catch((error) =>{
    console.log("error", error);
})
.finally(() =>{
    console.log("finllay getting executed")
})

const exampleOfTh  = "singhashish@82103gmail.com"; 
const nextPath = 







   
