/**
 * @jest-environment jsdom
 */

const {game, newGame, showScore, addTurn, lightsOn} = require('../game');

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe('game object contains correct keys', function () {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  });
  test("choices contain correct ids", () => {
    expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
  });
});


describe('newGame works correctly', function () {
  beforeAll(() => {
    game.score = 42;
    game.playerMoves = ['button1', 'button2', 'button3'];
    game.currentGame = ['button1', 'button2', 'button3'];
    document.getElementById('score').innerText = "42";
    newGame();
  });

  test("should set the game score to zero", () => {
    expect(game.score).toEqual(0);
  });
  test("should clear the play moves array", () => {
    expect(game.playerMoves).toEqual([]);
  });
  test("should be one element in the current game computer sequence array", () => {
    expect(game.currentGame.length).toEqual(1);
  });
  test("should display zero for the element id of score", () => {
    expect(document.getElementById('score').innerText).toBe(0);
  });
});

describe('game play works correctly', function () {
  beforeEach(() => {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    addTurn();
  });
  afterEach(() => {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
  });
  test("add turn adds a new turn to the game", () => {
    addTurn();
    expect(game.currentGame.length).toBe(2);
  });
  test("should add correct class to light up the buttons", () => {
    let button = document.getElementById(game.currentGame[0]);
    lightsOn(game.currentGame[0]);
    expect(button.classList).toContain('light');
  });
});
