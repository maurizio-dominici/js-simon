// ^ FUNZIONI
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const countDown = () => {
  if (countDownTime > 0) {
    countDownTime--;
    console.log(`${countDownTime}`);
  } else {
    clearInterval(timerId);
  }
};
// ^ RACCOLTA DATI

const numbersListEl = document.getElementById("numbers-list");
const countDownEl = document.getElementById("countdown");
const userInstructions = document.getElementById("instructions");
const userFormNumber = document.getElementById("answers-form");
const userMessage = document.getAnimations("message");
const userInput = document.querySelectorAll("#input-group-input");
const userInputNumer0 = document.getElementById("numero-0");
const userInputNumer1 = document.getElementById("numero-1");
const userInputNumer2 = document.getElementById("numero-2");
const userInputNumer3 = document.getElementById("numero-3");
const userInputNumer4 = document.getElementById("numero-4");

// console.log(numbersListEl);
// console.log(numbersListEl);
// console.log(countDownEl);
// console.log(userInstructions);
// console.log(userMessage);
// console.log(getRandomNumber(1, 100));
// console.log(userInput);

const guessNumbers = [];

for (let i = 0; i < 5; i++) {
  const randomNumber = getRandomNumber(1, 50);
  guessNumbers.push(randomNumber);
  numbersListEl.innerHTML += `<li>${randomNumber}</li>`;
}
console.log(guessNumbers);

// ^ COUNTDOWN

let countDownTime = 11;
let timerId = setInterval(countDown, 1000);

countDownEl.innerHTML = `${countDown()}`;
setTimeout(() => {
  numbersListEl.classList.add("d-none");
  numbersListEl.classList.remove("d-flex");
  userFormNumber.classList.add("d-block");
  userFormNumber.classList.remove("d-none");

  userFormNumber.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputAll = [
      parseInt(userInputNumer0.value),
      parseInt(userInputNumer1.value),
      parseInt(userInputNumer2.value),
      parseInt(userInputNumer3.value),
      parseInt(userInputNumer4.value),
    ];

    console.log(userInputAll);
  });
}, 10000);
