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

function gameLoop() {
  requestAnimationFrame(gameLoop);
  frames++;
  player.move(player.direction);

  Enemy.enemyArray.forEach((enemy) => enemy.move());

  enemyCollision()
}

requestAnimationFrame(gameLoop);

// add collision here.

function enemyCollision() {
  Enemy.enemyArray.forEach((enemy) => {
    const enemyLeftEdge = enemy.getPositionLeft();
    const enemyRightEdge = enemy.getPositionLeft() + enemy.width;
    const enemyTopEdge = enemy.getPositionBottom() - enemy.height;
    const enemyBottomEdge = enemy.getPositionBottom();



   
  });


}

function fungiCollision() {}


const playerLeftEdge = player.getPositionLeft();
    const playerRightEdge = player.getPositionLeft() + player.width;
    const playerTopEdge = player.getPositionBottom() - player.height;
    const platerBottomEdge = player.getPositionBottom();

if( playerLeftEdge < enemyRightEdge && 
  playerRightEdge > enemyLeftEdge && 
  playerTopEdge < enemyBottomEdge && 
  platerBottomEdge > enemyTopEdge) {
    console.log("you are deeead!")
  }
