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

let functions =  function myfunct(num1, num2) {
    let scopes = undefined;
    console.log(scopes); // 20
    return num1 * num2;
}
 let result1 = functions(4, 5);
 console.log(result1); // 20
//  console.log(scopes); // error becoz of block scopes we can'nt find the lexical scopes

let user = [2, 4, 6, 8, 10];
console.log(user);
user.push(12);
console.log(user); //[2, 4, 6, 8, 10, 12]
console.log("scopes unrelased");
for(let i =0; i < user.length; i++) {
    console.log(user[i]);
    if(true) {
        console.log("system desgined is the final"); 
    } else {
        console.log("secure is the main task to impromise the given value form it!");
    }
};


















   
