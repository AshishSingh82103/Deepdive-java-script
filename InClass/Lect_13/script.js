//  ----------------- introduction to event ---------

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);

// // ------------- Removing Listeners --------------------
// // btn.removeEventListener("click", changeBackground);

// // btn.removeEventListener("click", removeEventListener);

// // const controller = new AbortController();

const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);

const btn1 = document.querySelector('#btn1');

// function random() {
//     btn.removeEventListener("click", changeBackground);
// }

function randomclick(number) {
    return Math.floor(Math.random() * (number + 1) );
}

function colorchanger1() {
    const btn_Setting = `rgb${randomclick(255)} ${randomclick(255)} ${randomclick(255)}`;
    document.body.style.backgroundColor = btn_Setting
}
btn1.addEventListener('click',colorchanger1);
btn1.addEventListener('click', console.log('logoIn into the main value'));


// console.log(Math.floor(Math.random() * (10 + 1)));

console.log("new balnace");


const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;