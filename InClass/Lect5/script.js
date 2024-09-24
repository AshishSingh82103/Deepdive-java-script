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

let userID = "singhashish82103@gmail.com";
let userlogIn = true;
let password = "singh@82103";

if(userID == "singhashish82103@gmail.com") {
    console.log("conditional satisfactory ");   
} else if(userlogIn != ture) {
    console.log("conditon ternary operation is successsfully executed");
} else if (password === "singh@82103") {
    console.log("is back with the main string")
}

let idGenrate = "ashish832109tcs@gmail.com";
for (let i = 0; i < idGenrate.stringLenght; i++){
    console.log(i);
}
console.log(idGenrate.length); // 25

let str = " String";
console.log(str.length);

let concatinate = idGenrate + str;
console.log(concatinate);

str.charAt(2);
// console.log(str.charAt(2));  

str.substring(0, 2); 
console.log(str);