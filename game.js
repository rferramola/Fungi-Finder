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

  gameOver() {
    this.element.remove();
    const gameOverScreen = document.querySelector("#you-lose");

    this.isGameOver = true;
    this.gameStarted = false;
    gameOverScreen.style.display = "flex";
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

  let index = 40;

  const myInterval = setInterval(() => {
    index--;

    if (index <= 0) {
      clearInterval(myInterval);
      youWin.style.display = "flex";
      const gameElement = document.querySelector("#game-area");
      gameElement.remove();
    }

    counterElement.innerText = index;
  }, 1000);
}
