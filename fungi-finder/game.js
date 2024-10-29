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
  looseLive() {
    if (this.lives > 0) {
      this.lives--;
    }
  }
}

const myGame = new Game();

function time() {
  const counterElement = document.querySelector("#counter");

  let index = 40;

  const myInterval = setInterval(() => {
    index--;

    if (index <= 0) {
      clearInterval(myInterval);
    }
    counterElement.innerText = index;

    console.log({ index });
  }, 1000);
}
