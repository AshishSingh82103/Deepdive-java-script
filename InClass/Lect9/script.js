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
// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// arr3.sort();

// console.log(arr3); // [1, 2, 3, 4, 5]


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let isEqual = arr1 === arr2
console.log(isEqual); // false (beacuse arrr sotred in heap and they can get only adress so arr1 in store in the other adrees and arr2 sotred in the other sotred.)

// 1. push

let lengthOfArr = arr1.push(7);
console.log(arr1); // [1, 2, 3, 4, 5,  6, 7, 8, 9]
console.log(lengthOfArr);

const lenghtOfArr2 = arr2.push(9);
console.log(arr2); // [1, 2, 3, 4, 5,  6, 7, 8, 9]
console.log(lenghtOfArr2); // 9
