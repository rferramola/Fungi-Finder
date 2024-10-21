document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "a":
      player.direction = "left";
      break;
    case "ArrowRight":
    case "d":
      player.direction = "right";
      break;
  }
});

document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowLeft":
      case "a":
        if (player.direction === "left") {
          player.direction = null;
        }
        break;
      case "ArrowRight":
      case "d":
        if (player.direction === "right") {
          player.direction = null;
        }
  
        break;
    }
  });