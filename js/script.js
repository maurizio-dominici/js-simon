// ^ FUNZIONI
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ^ RACCOLTA DATI
const numbersListEl = document.getElementById("numbers-list");
const countDownEl = document.getElementById("countdown");
const userInstructions = document.getElementById("instructions");
const userFormNumber = document.getElementById("answers-form");
const userMessage = document.getAnimations("message");

// console.log(numbersListEl);
// console.log(numbersListEl);
// console.log(countDownEl);
// console.log(userInstructions);
// console.log(userMessage);
// console.log(getRandomNumber(1, 100));

const guessNumbers = [];

for (let i = 0; i < 5; i++) {
  const randomNumber = getRandomNumber(1, 50);
  guessNumbers.push(randomNumber);
  numbersListEl.innerHTML += `<li>${randomNumber}</li>`;
}

console.log(guessNumbers);

// ^ COUNTDOWN
setTimeout(() => {
  numbersListEl.classList.add("d-none");
  numbersListEl.classList.remove("d-flex");
  userFormNumber.classList.add("d-block");
  userFormNumber.classList.remove("d-none");
}, 5000);

userFormNumber.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(userFormNumber.value);

  //   console.log("ciao");
});
