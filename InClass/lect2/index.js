// ---- variables----
//  var basically not used for this time it is out dated

// 1. let
// 2. const

// let age = 12;
// console.log(age); // This is heavly used
// alert(age); // old bankking site use

// -- Data-types ----

// 1. Strings => "singhshihs"
// 2. Number => 123
// 3. boolean => true, false
// 4. null => it is set by user / developer
// 5. undefined => it is set by user / but it is initally set by program only

// let user = [{
//     name: "ashish",
//     parents : [{
//         name: "mother",
//         age: 48
//     },{
//         name: "father",
//         age: 50
//     }]
// }]

// if(user has deleted account) {
//     user = null; // This is right and good parctise
//     user = undefined // this is bad parctise, not wroung
// }

// let user = [{
//     name: "ashish",
//     parents : [{
//         name: "mother",
//         age: 48
//     },{
//         name: "father",
//         age: 50
//     }]
// }]

// console.log(user);

//  user = null;

//  console.log(user);

// ------------ --- -- Objects -- --- --------------

// ------ in java -------
// Api api = new Api();

// api {
//     git: "yes",
//     access: 4,
//     ac: true
// }

// --------- in java script --------
//  in java we cannot create property name with space but in java-script it is allowed
// let api = {
//     git: "yes",
//     access: 4,
//     ac: true,
//     sports: false,
//     power: true,
//     "engine version": 8,
//     "year": 2019
// }

// console.log(api); // { git: 'yes', access: 4, ac: true, sports: false, power: true }

// // get the properties
// console.log(api.access); // 4
// console.log(api["git"], "will i get git"); // yes will i get git
// console.log(api["access"], "access are there"); // 4 access are there
// console.log(api.year, api.access,api.engineversion, "purchase_year");// 2019 4 undefined purchase_year
// console.log(api.year, api.access,api["engine version"], "purchase_year");// 2019 4 8 purchase_year


// // edit the properties
// api.git = "Not found";
// console.log(api.git); // Not Found

// // delete the properties
// delete api.power
// delete api["engine version"]
// console.log(api);

// // -------Arrays------

// let arr = [1, 2, "abcd", 4, 'c', true];
// console.log(arr);

// //  get the value
// console.log(arr[0], arr[2], arr[4]);

// //  edit the value
// arr[0] = "start";
// console.log(arr);

// // length of the array
// console.log(arr.length, "het there array"); // 6

// // weird thing

// arr.length = 0; //  This is not good
// arr.length = null;
// console.log(arr, "hey there array"); // [] hey there array

// ---- -- Properties of array-- ---

let arr = [1, 2, 3, 4]

// 1. push the value in array add  at the last position of array
arr.push(5);
console.log(arr);

// pop the value in remove the last value of array
arr.pop();
console.log(arr);

// shift => it remove the first element of the array
arr.shift()
console.log(arr);








   

