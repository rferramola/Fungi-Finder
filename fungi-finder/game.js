class Game {
  constructor() {
    this.started = false;
    this.isGameOver = false;
    this.totalMushrooms = 0;
    this.lives = 3;
    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.livesElement = document.querySelector("#lives");
  }
  looseLive() {
if(this.lives <= 0) {
console.log(("this means you hace 0 lives"));

} 
  // if (this.lives > 0) {
    //   this.lives--;
    // }
  }
  

  startScreen() {
    const playButtom = document.querySelector("#play-buttom");
    const startScreen = document.querySelector("#principal-screen");

    playButtom.addEventListener("click", () => {
      myGame.started = true;
      startScreen.style.display = "none";
    });
  }
}
const myGame = new Game();

//SONIDO DE FONDO
const soundtrack = new Audio("sounds/sounds.mp3");
//soundtrack.play();

function time() {
  const counterElement = document.querySelector("#counter");
  const youWin = document.querySelector("#you-win");

  let index = 40;

  const myInterval = setInterval(() => {
    index--;

    if (index <= 0) {
      clearInterval(myInterval);
      youWin.style.display = "block";
      youWin.style.display = "flex";
    }

    counterElement.innerText = index;

    //console.log({ index });
  }, 1000);
}
