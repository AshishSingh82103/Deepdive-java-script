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

// let arr = [19, 21, 37, 44, 51, 69, 77, 89];

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

// arr.forEach(ashishFunction);


// 2. -------------- Map ----------------------

// let arr = [19, 21, 37, 44, 51, 69, 77, 89];

// let beautifulArray = arr.map((value, index, arr) => {
//     console.log(value + " map at index of", index);
    
//     let rank = ''
//     if(value < 22) {
//         rank = 'undergrad'
//     } else if (value >= 22 && value < 30) {
//         rank= 'passed-out'
//     } else if (value >= 30) {
//         rank = 'Experienced people'
//     }
//     let obj = {
//         age: value,
//         rank: rank
//     }
//     return obj;
// });

// console.log(arr);
// console.log(beautifulArray);

// let arr2 = [10, 15, 25, 30, 35, 40, 45];



//   let modifiedArray = arr2.map((value, index) =>{
//     console.log(value, "map at index", index);

//     let rank = ''
//     if(value < 25) {
//         rank = 'undergraduate'
//     } else if(value >= 25 && value < 35) {
//         rank = 'passed-out'
//     } else if (value >= 35 && value < 45) {
//         rank = 'Experineced'
//     } else if(value >= 45) {
//         rank = "Retired-out"
//     }
//     let obj = {
//         value: value,
//         rank: rank
//     }
//     return obj;
// })
// console.log(modifiedArray);

// let arr3 = [12, 20, 34, 43, 57, 86, 92];

// let simplifiedArr = arr3.map((value, index) =>{
//     console.log(value, "map at index of", index);

//     let rank = '';
//     if(value < 20) {
//         rank = 'teenage';
//     } else if(value >= 20 && value < 43) {
//         rank = 'passout'
//     } else if (value >= 43 && value < 57) {
//         rank = 'empployed'
//     } else if(value >= 57 && value < 86) {
//         rank = 'retired'
//     } else if ( value >= 86 && value < 92) {
//         rank = 'old people'
//     } else if(value >= 92) {
//         rank = 'undefined people'
//     }

//     let obj = {
//         value: value,
//         rank: rank
//     }
//     return obj;


// });
// console.log(simplifiedArr);

// ---------- this is for the refrences ----------


// <22 -> Under-graduate
// <30 > 22 -> pass out peeps
//  >30 -> old people

// {
//     age: 19,
//     rank: "Under-graduate"
// }
// {
//     age: 21,
//     rank: "Under-graduate"
// }
// {
//     age: 37,
//     rank: "Under-graduate"
// }

// let arr1 = [
//     {name: "Ashish",
//         age: 27
//     },
//     {name: "Ankit",
//         age: 30
//     },
//     {name: "neha",
//         age: 32
//     },

// ];
// let arr2 = ["Ashish", "neha", "ankit"];

// 3 --------------- filter ----------------

const words = ["seeks", 'ambush', 'reliegh', 'show']

const result = words.filter((words) => words.length > 4);
console.log(result); // [ 'seeks', 'ambush', 'reliegh' ]


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]












// function sum(a, b) {
//     return a + b;
// }
// let res1 = sum(1, 2) // me calling
// console.log(res1); // 3

// let sumFunc = (a, b) =>{
//     return a + b;
// }

// let res2 = sumFunc(1, 2);
// console.log(res2); // 3














