// ------------ Array ------------
// let arr = [1, 2, 3, 4];

// console.log(arr.length); // 4

// this push will add element in the end.
// arr.push(5);

// console.log(arr.length); // 5

// const arr1 = [1, 2, 3, 4, 5, 6];
// arr1.push(7); // will this be allowed ?

// console.log(arr1.length); // 7


// let arr3 = [3, 4, 5, 1, 2];

// To sort the elements in an array without mutating the original array.
// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.(using compartors then the accesnding orderes);

// arr3.sort();

// console.log(arr3); // [1, 2, 3, 4, 5]


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// let arr3 = arr1;
// console.log(arr1 === arr3); // true

// let isEqual = arr1 === arr2
// console.log(isEqual); // false (beacuse arrr sotred in heap and they can get only adress so arr1 in store in the other adrees and arr2 sotred in the other sotred.)

// 1. push

// let lengthOfArr = arr1.push(7);
// console.log(arr1); // [1, 2, 3, 4, 5,  6, 7, 8, 7]
// console.log(lengthOfArr); // 9


// 2. pop => remove the value from last index.

// console.log(arr1.pop(), "pop value"); // 7 pop value
// console.log(arr1.length); // 8


// 3. slice it return the shallow copy of the arr

// console.log(arr1);

// let sliceArr = arr1.slice(2, 5);

// console.log(sliceArr);

// console.log(arr1 === sliceArr); // false

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// 4 . splice => Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// console.log(arr1); // [ 1,2, 3, 4, 5, 6, 7, 8 ]

// let spliceArr = arr1.splice(1, 2);
// console.log(spliceArr); // [ 2, 3 ]

// console.log(arr1); // [ 1, 4, 5, 6, 7, 8 ]

// 5. sort => Sorts an array in place. This method mutates the array and returns a reference to the same array.

// let orgArr = [1, 5, 7, 3, 2, 9, 8];
// console.log(orgArr, 'org array before sorting'); // [1, 5, 7, 3, 2, 9, 8]


// let answerSortedArray = orgArr.sort();
// console.log(answerSortedArray, 'org array after sorting'); // [1, 2, 3, 5, 7, 8, 9]

// console.log(orgArr === answerSortedArray, "both are they same"); // true both are they same only replce the array


// let originalArray = [1, 5, 7, 3, 2, 9, 45, 21, 11, 19, 103, 391, 231];
// console.log(originalArray);

// let ansAfterSort = originalArray.sort();
// console.log(ansAfterSort); // [1, 103, 11, 19, 2, 21, 231, 3, 391, 45, 5, 7, 9]


// comparator
// originalArray.sort((a, b) => a - b) // asecnding order
// originalArray.sort((a, b) => b - a) // descending order

// console.log(originalArray); // [1, 2, 3, 5, 7, 9, 11, 19, 21, 45, 103, 231, 391]


// 6. Shift  
//  => shift and unshift is just to similiar to push and pop but shift and unshift does it operation in the start

// console.log(arr1);

// arr1.shift();

// console.log(arr1); // [2, 3, 4, 5, 6, 7, 8]

// 7. unshift

// console.log(arr1);

// arr1.unshift(0);

// console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8]


// -------------  Looping ------------------

// 1. for , while

// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// 2. for of loop

let arrOne = [10, 2, 31, 42, 5, 6, 7, 8];
// for (let item of arrOne) {
//     console.log(item); // print the value
// }


// 3. for in loop

for (let item in arrOne) {
    console.log(item); // print the index(key)
}

//  --------------- Extra function Array callbacks ---------

// 1. filter

let arrTwo = [5, 8, 900, 3, 1, 2, 18, 19, 20, 25, 100, 189];

function filterAshihs() {

}

// arrTwo.filter(function() {

// })'

// arrow - function
let ans = arrTwo.filter((item) => {
    return item > 19;
})

console.log(ans); // [ 900, 20, 25, 100, 189 ]






