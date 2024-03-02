let formGuessNode = document.querySelector("#formGuess");
let inputNode = document.querySelector("#enter");
let answerNode = document.querySelector(".answer");
let regain = document.querySelector(".regain");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let counter = 0;
let games = 0;


formGuessNode.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputNode.value) {
    counter += 1;
    if (randomNumber > inputNode.value) {
      answerNode.textContent = "Больше";
    } else if (randomNumber < inputNode.value) {
      answerNode.textContent = "Меньше";
    } else if (randomNumber == inputNode.value) {
      answerNode.textContent = `Угадал за ${counter} ходов`;
      regain.classList.toggle("d-none");
      formGuessNode.classList.toggle("d-none");
      document.querySelector("#count").textContent = ++games;
    }
    inputNode.value = "";
  }
});

regain.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
  counter = 0;
  regain.classList.toggle("d-none");
  formGuessNode.classList.toggle("d-none");
  answerNode.textContent = "–";
})
