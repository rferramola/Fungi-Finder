document.addEventListener("keydown", (e) => {
  switch (e.key) {
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
    case "ArrowTop":
    case "w":
    case "W":
      player.direction = "top";
      break;
    case "ArrowBottom":
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
    case "ArrowTop":
    case "w":
    case "W":
      if (player.direction === "top") {
        player.direction = null;
      }
      break;
    case "ArrowBottom":
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
}

requestAnimationFrame(gameLoop);
