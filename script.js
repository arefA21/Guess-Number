let guesses = [];

// Variable for store the correct random number
let correntNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  if (numberGuess > correntNumber) {
    showNumberAbove();
  } else if (numberGuess < correntNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}
function initGame() {
  correntNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {
  let wholeNumber = Math.floor(Math.random() * 100) + 1;
  return wholeNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "you guessed " +
      guesses[index] +
      "</li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
