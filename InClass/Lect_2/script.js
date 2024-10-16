// console.log("hello")


//  ----------variables--------------
// 1.let
// 2. const
let age = 21;
console.log(age);// this is highly use to debuggg
//alert(age);// old banking sites use


//Data types
// 1:String = "aashish";
// 2:Number = 123,25
//3: Boolean = true,false
//4:Null = > it is set by devloper
//5:Undefined => it is set by user /  but it is initaly set by only program

// let history = null;
// let user1 = [{
//     namme:"ashish",
//     parents:[{
//         name:"mother",
//         age:50,
//     },{
//         name:"father",
//         age:55,
//     }]
// }]
// console.log(user1); //[ { namme: 'ashish', parents: [ [Object], [Object] ] } ]
// user = null;
// // if(user has delete his acoount){
// //     // user = null; this is right and good parctise
// //     // user  = undefined; this is bad parctise , not worng but bad parctise
// // }
// console.log(user);

// ----------- Objects----------
//  ------- in java ------------
//  Car car = new Car();

//  car {
//     wheels:"yes",
//     seats:4,
//     ac:true
//  }

//  ---------- In java-script--------
// --- =>in java we can't creat properrty name with the space.but in js it is allowed.
// let car = {
//     wheels: "yes",
//     seats: 4,
//     ac: true,
//     sports: false,
//     powerwheels: true,
//     "engine version":8,//This should be not good practise
//     // engineVersion:8, this is the good practise
//     "years":2019,
// }
// console.log(car);

//  get the property
//   console.log(car.years, car.seats,car["engine version"], "Purchase year");
//  console.log(car["seats"], "seats are there.");

//  edit the  value
// car["engine version"] = "v8";
// car.seats = 2;
// console.log(car.wheels, car.seats);

// Delete the property
// car["engine version"];
// delete car.powerwheels;
// console.log(car);


// --------------------------------Arrays--------------------------------------------
// let arr = [1,2, "ashish", 'a', true];
// console.log(arr);
// let char = 'c';
// let charstring = "c";

// get the value
// console.log(arr[0], arr[2], arr[4]);

// edit the value
// arr[0] = "ashi";
// console.log(arr);

// --length the array
// console.log(arr.length, "length of the array");

// --Weird thing
// arr.length = 0; this is not good
// arr  = null;
// console.log(arr, "hey there array");

// -----Arrays properties

// 1:- Push => add the element inlast position of array
// let arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);

// // 2:- PoP => remove the last element from array
// arr.pop();
// console.log(arr);

// // 3:- Shift => it removes the 1st element from array
// arr.shift();
// console.log(arr);
