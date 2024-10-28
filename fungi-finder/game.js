class Game {
  constructor() {
    this.isGameOver = false;
    this.score = 0;
    this.lives = 3;
    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.livesElement = document.querySelector("#lives");
  }
 
}

const myGame = new Game();
