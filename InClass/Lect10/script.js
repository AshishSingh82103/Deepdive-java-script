//  --------------- Extra function Array callbacks ---------

// 1. filter

// let arrTwo = [5, 8, 900, 3, 1, 2, 18, 19, 20, 25, 100, 189];

// function filterAshihs() {

// }

// // arrTwo.filter(function() {

// // })'

// // arrow - function
// let ans = arrTwo.filter((item) => {
//     return item > 19;
// })

// console.log(ans); // [ 900, 20, 25, 100, 189 ]



// 1. -------------for each ------------ = > just ittrate from left to right every element poistion and it's self hole array

let arr = [19, 21, 37, 44, 51, 69, 77, 89];

// 1. parent => forEach
// => for each going to evry index

// 2. callback -> () =>{printout the element} // user function


// arr.forEach((value, index, arr) => {
//     console.log(value, index, arr, 'hey there i am traversing');

// })

// arr.forEach(() => {
//     console.log('hello world') // i should see hello world 8 times.
// })

// arr.forEach((value, index) => {
//     console.log(value, "at index", index);
// })

//  --------- execute my function ------------

// function ashishFunction(value, index) {
//     console.log(value, "at index", index);
// }

// arr.forEach(ashishFunction)


// 2. -------------- Map ----------------------






function sum(a, b) {
    return a + b;
}
let res1 = sum(1, 2) // me calling
console.log(res1); // 3

let sumFunc = (a, b) =>{
    return a + b;
}

let res2 = sumFunc(1, 2);
console.log(res2); // 3














