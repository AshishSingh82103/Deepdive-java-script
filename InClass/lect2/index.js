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
let api = {
    git: "yes",
    access: 4,
    ac: true,
    sports: false,
    power: true,
}

console.log(api); // { git: 'yes', access: 4, ac: true, sports: false, power: true }

// get the properties
console.log(api.access); // 4

// edit the properties
let edit = api.git = "Not found";
console.log(edit); // Not Found




   

