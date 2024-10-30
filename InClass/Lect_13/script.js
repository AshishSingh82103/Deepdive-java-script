// //  ----------------- introduction to event ---------

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);

// // // ------------- Removing Listeners --------------------
// // // btn.removeEventListener("click", changeBackground);

// // // btn.removeEventListener("click", removeEventListener);

// // // const controller = new AbortController();

// const controller = new AbortController();

// btn.addEventListener("click",
//   () => {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   },
//   { signal: controller.signal } // pass an AbortSignal to this handler
// );

// const btn1 = document.querySelector('#btn1');

// // function random() {
// //     btn.removeEventListener("click", changeBackground);
// // }

// function randomclick(number) {
//     return Math.floor(Math.random() * (number + 1) );
// }

// function colorchanger1() {
//     const btn_Setting = `rgb${randomclick(255)} ${randomclick(255)} ${randomclick(255)}`;
//     document.body.style.backgroundColor = btn_Setting
// }
// btn1.addEventListener('click',colorchanger1);
// btn1.addEventListener('click', console.log('logoIn into the main value'));


// // console.log(Math.floor(Math.random() * (10 + 1)));

// console.log("new balnace");


// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.onclick = bgChange;

// console.log('new');

// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", bgChange);
// }

// let value = 54;

// console.log(value);

// if(value > 20 ) {
//     console.log('Value defined');
// } else if (value < 20) {
//     console.log('value exceeded');
// } else {
//     console.log('Something is print');
// }

// console.log("new _value is assgin the ment");

// function sechduling_the_link() {
//     console.log('newValue');
// }

// function set_user() {
//     let the_value = 54;
//     if(the_value > 20) {
//         console.log("new value is defined from the user");
//     } else if(the_value < 20) {
//         console.log('Value exceeded');
//     } else {
//         console.log('Something print');
//     }
// }

// value_user(undefined);
// console.log(function newuser(value1, value2){
//     return value1 + value2;
// });

// const user_undefined = function value_undefined(num1, num2) {
//     console.log("new value");

// }

// console.log('newuser')


// const buttun2 = document.querySelector('button');

// function colorchanger1(number) {
//     return (Math.floor(Math.random * (number + 1)))
// }

// function changeLength() {
//   console.log('some value got it!')
// }


// let promise = new Promise((resolve, reject) => {
    
//   console.log("value assinged the function observed");

//   let items = null;
//   if(items === null) {
//     console.log('value undefined');
//   } else if(items === undefined) {
//     console.log('execution confirmed');
//   } else if ('logIn execution') {

//   }
// });

// console.log('returning the value of it');

// const output = document.querySelector("#output");

// function handelClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} elemnet\n`;

// }

// const container = document.querySelector('#container');
// container.addEventListener('click', handelClick);


// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);

// // ---------------- btn class lst remover --------------

const btn = document.querySelector('button');

const box = document.querySelector('div');

const video = document.querySelector('video');


// btn.addEventListener("click", () => box.classList.remove("hidden"));

// video.addEventListener("click", () => video.play());

// // btn.addEventListener("click", () => box.classList.add("hidden"));

// box.addEventListener("click", () => box.classList.add("hidden"));

// // fixing the problem with startprpogation()

// video.addEventListener("click", (event) =>{
//   event.stopPropagation();
//   video.play();
// })

// box.addEventListener("click", () => box.classList.add('hidden'));



// const output = document.querySelector('#output');

// function handelClick(e) {
//   output.textContent += `User clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector('#container');

// const button = document.querySelector("button");

// document.body.addEventListener("click", handelClick, {capture: true});

// container.addEventListener('click', handelClick, {capture: true});

// button.addEventListener('click', handelClick);


// ---------------- Event - delegation --------------

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});


const devcon = document.getElementById('dev-console');

// devcon.textContent = 'some value get';

let constUser = new deployment((resolve, reject) => {
  console.log('newly assignment');
  if(value = null) {
    reject('some issue has been arrived');
  } else if (value === null) {
    resolve('got some issue has been not sent');
  }

});




let promise = new Promise((resolve, reject) => {
  let items = undefined;
  if(items === undefined) {
    resolve('value is null for the some rare excess');
  } else {
    reject('fetching the API user');
  }
})

promise
.then((user) =>{
  console.log(user, "new console has been created");
})
.catch((error) => {
  console.log('new user has been created');
})
.finally(() => {
    console.log('fetching the API');
});

let func = function (num1, num2) {
  // code here
  return num1 + num2;



}

console.logfunc.apply(3, 2);










