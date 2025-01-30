class Game {
  constructor() {
    this.gameStarted = false;
    this.isGameOver = false;
    this.totalMushrooms = 0;
    this.lives = 3;
    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.livesElement = document.querySelector("#lives");
    this.updateLives();
  }

  looseLive() {
    if (this.lives > 0) {
      this.lives--;
    }
    this.updateLives();
  }

  updateLives() {
    this.livesElement.innerText = "🧡".repeat(this.lives);
  }

  startGame() {
    const playButtom = document.querySelector("#play-button");
    const restartButton = document.querySelector("#restart-button");
    const principalScreen = document.querySelector("#principal-screen");

    playButtom.addEventListener("click", () => {
      this.gameStarted = true;
      principalScreen.style.display = "none";
    });

    restartButton.addEventListener("click", () => {
      location.reload();
    });
  }

  stopGame() {
    this.isGameOver = true;
    this.gameStarted = false;
  }

  gameOver() {
    this.stopGame();
    const gameOverScreen = document.querySelector("#you-lose");
    gameOverScreen.style.display = "flex";
    this.element.remove();
  }
}

const myGame = new Game();
myGame.startGame();

//SONIDO DE FONDO
const soundtrack = new Audio("sounds/sounds.mp3");
//soundtrack.play();

function startTime() {
  const counterElement = document.querySelector("#counter");
  const youWin = document.querySelector("#you-win");

  let index = 10;

  const myInterval = setInterval(() => {
    index--;

    if (index <= 0) {
      if (!myGame.isGameOver) {
        youWin.style.display = "flex";
      }
      myGame.stopGame();
      clearInterval(myInterval);
      const gameElement = document.querySelector("#game-area");
      gameElement.style.display = "none";
      gameElement.remove();
      document.querySelector("#total-mushrooms").textContent =
        "Mushrooms: " + myGame.totalMushrooms;
    }

    counterElement.innerText = index;
  }, 1000);
}
