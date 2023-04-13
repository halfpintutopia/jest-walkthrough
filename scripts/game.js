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
  for (let circle of document.getElementsByClassName('circle')) {
    if (circle.dataset.listener !== true) {
      circle.addEventListener('click', (e) => {
        if(game.currentGame.length > 0 &&!game.turnInProgress) {
          let move = e.target.getAttribute('id');
          game.lastButon = move;
          lightsOn(move);
          game.playerMoves.push(move);
          playerTurn();
        }
      });
      circle.dataset.listener = 'true';
    }
  }
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
  game.turnInProgress = true;
  game.turnNumber = 0;
  let turns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if(game.turnNumber >= game.currentGame.length) {
      clearInterval(turns);
      game.turnInProgress = false;
    }
  }, 800);
}

/**
 * Check if the player click move matches the corresponding to order of array
 * If they do not match we display an alert and start a new game
 * ---------------------------------------------------------------------------
 * call addTurn() if new game has not started
 */
function playerTurn() {
  let i = game.playerMoves.length -1;
  if (game.currentGame[i] === game.playerMoves[i]) {
    if (game.currentGame.length === game.playerMoves.length) {
      game.score++;
      showScore();
      addTurn();
    }
  } else {
    alert('Wrong move!');
    newGame();
  }
}

module.exports = {game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn}
