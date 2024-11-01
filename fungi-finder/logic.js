document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
    case "a":
    case "A":
      player.direction = "left";
      break;
    case "ArrowRight":
    case "d":
    case "D":
      player.direction = "right";
      break;
    case "ArrowUp":
    case "w":
    case "W":
      player.direction = "top";
      break;
    case "ArrowDown":
    case "s":
    case "S":
      player.direction = "bottom";
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "a":
    case "A":
      if (player.direction === "left") {
        player.direction = null;
      }
      break;
    case "ArrowRight":
    case "d":
    case "D":
      if (player.direction === "right") {
        player.direction = null;
      }
      break;
    case "ArrowUp":
    case "w":
    case "W":
      if (player.direction === "top") {
        player.direction = null;
      }
      break;
    case "ArrowDown":
    case "s":
    case "S":
      if (player.direction === "bottom") {
        player.direction = null;
      }
      break;
  }
});

let frames = 0;


let hasStartedGame = false;

function gameLoop() {
  requestAnimationFrame(gameLoop);

  if (myGame.gameStarted && !myGame.isGameOver) {
    if (!hasStartedGame) {
      createEnemies();
      startTime();
      hasStartedGame = true;
    }

    frames++;
    player.move(player.direction);

    Enemy.enemyArray.forEach((enemy) => enemy.move());

    enemyCollision();
    pickFungi();
    //const soundtrack = new Audio("sounds/sounds.mp3");
    soundtrack.play();
  }
}

requestAnimationFrame(gameLoop);

// add collision here.
const bearRoar = new Audio("sounds/bear.mp3");
//soundtrack.play();
function enemyCollision() {
  const playerLeftEdge = player.positionLeft;
  const playerRightEdge = player.positionLeft + player.width;
  const playerTopEdge = player.positionTop;
  const playerBottomEdge = player.positionTop + player.height;

  Enemy.enemyArray.forEach((enemy) => {
    const enemyLeftEdge = enemy.positionLeft;
    const enemyRightEdge = enemy.positionLeft + enemy.width;
    const enemyTopEdge = enemy.positionTop;
    const enemyBottomEdge = enemy.positionTop + enemy.height;

    if (
      playerLeftEdge < enemyRightEdge &&
      playerRightEdge > enemyLeftEdge &&
      playerTopEdge < enemyBottomEdge &&
      playerBottomEdge > enemyTopEdge
    ) {
      //prueba de vidas
      if (myGame.lives > 1) {
        myGame.looseLive();
        enemy.removeEnemy();
        bearRoar.play();
      } else {
        myGame.gameOver();
      }
    }
  });
}

const soundFungi = new Audio("sounds/fungi.mp3");
function pickFungi() {
  const playerLeftEdge = player.positionLeft;
  const playerRightEdge = player.positionLeft + player.width;
  const playerTopEdge = player.positionTop;
  const playerBottomEdge = player.positionTop + player.height;

  Fungus.fungusArray.forEach((fungi) => {
    const fungiLeftEdge = fungi.positionLeft;
    const fungiRightEdge = fungi.positionLeft + fungi.width;
    const fungiTopEdge = fungi.positionTop;
    const fungiBottomEdge = fungi.positionTop + fungi.height;

    if (
      playerLeftEdge < fungiRightEdge &&
      playerRightEdge > fungiLeftEdge &&
      playerTopEdge < fungiBottomEdge &&
      playerBottomEdge > fungiTopEdge
    ) {
      myGame.totalMushrooms++;
      document.querySelector("#total-mushrooms").textContent =
        "Mushrooms: " + myGame.totalMushrooms;
      console.log("YOU GOT A MUSHROOM");
      soundFungi.play();
      fungi.removeFungi();
      new Fungus();
    }
  });
}
