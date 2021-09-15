//Player 1 Dice - gets a random number and sets dice image according to its value (1-6).
function playerOneDice () {
  var randomNumber1 = Math.floor(Math.random()*6) + 1;
  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomDiceImage1);
  return randomNumber1;
}

//Player 2 Dice - gets a random number and sets dice image according to its value (1-6).
function playerTwoDice () {
  var randomNumber2 = Math.floor(Math.random()*6) + 1;
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomDiceImage2);
  return randomNumber2;
}

//A function that checks the game situation, if there is a winner or a draw.
function gameSituation (playerOneDiceValue, playerTwoDiceValue) {
  if (playerOneDiceValue === playerTwoDiceValue) {
    document.querySelector("h1").textContent = "Draw!";
  }else if (playerOneDiceValue > playerTwoDiceValue) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  }else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
}

function gameStart() {
  dice1 = playerOneDice();
  dice2 = playerTwoDice();
  gameSituation(dice1, dice2);
  document.querySelector("h1").classList.add("lowerH1");
}
