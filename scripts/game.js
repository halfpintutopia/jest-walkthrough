/*
JavaScript Structure

- game Object
- newGame()
- addTurn()
- showTurns()
- lightsOn()
- playerTurn()
- showScore()
 */

let game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  turnNumber: 0,
  choices: ['button1', 'button2', 'button3', 'button4'],
}

/**
 * Reset the score to zero
 * Clear the playMoves array
 * Clear the currentGame array
 * ----------------------------
 * Call the showScore() function
 * Call the addTurn() function
 */
function newGame() {
  game.score = 0;
  game.playerMoves = [];
  game.currentGame = [];
  showScore();
  addTurn()
}

function showScore() {
  document.getElementById('score').innerText = game.score;
}

/**
 * Clear play moves array
 * Add a randomly selected button to the sequence
 * -----------------------------------------------
 * Call showTurns() function
 */
function addTurn() {
  game.playerMoves = [];
  game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
  showTurns();
}

function lightsOn(circle) {
  document.getElementById(circle).classList.add('light');
  setTimeout(() => {
    document.getElementById(circle).classList.remove('light');
  }, 400);
}

/**
 * Step through currentGame array
 * Turn on the light
 * Turn off the light
 */
function showTurns() {
  game.turnNumber = 0;
  let turns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if(game.turnNumber >= game.currentGame.length) {
      clearInterval(turns);
    }
  }, 800);
}

// playerturn()

module.exports = {game, newGame, showScore, addTurn, lightsOn, showTurns}
