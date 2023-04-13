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
}

function showScore() {
  document.getElementById('score').innerText = game.score;
}

module.exports = {game, newGame, showScore}
