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

// ------------- Removing Listeners --------------------
// btn.removeEventListener("click", changeBackground);

// btn.removeEventListener("click", removeEventListener);

// const controller = new AbortController();

const inputBtn = document.querySelector("#input");

function colorChanger(number) {

    return Math.floor(Math.random() * (number + 1));
}

function changeBackgroundCol() {
    const randomCOlor = `${colorChanger(255)} ${colorChanger(255)} ${colorChanger(255)}`
    document.body.style.backgroundColor = randomCOlor;
}

inputBtn.addEventListener('click', changeBackgroundCol);

