class Player {
  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "player");
    myGame.element.appendChild(this.element);
    this.positionBottom = 0;
    this.positionLeft = 0;
    this.velocity = 10;
    this.direction = null;
    this.width = this.element.getBoundingClientRect().width;
  }
  move(direction) {
    if (direction === "left") {
      this.positionLeft -= this.velocity;
      if (this.positionLeft <= 0) {
        this.positionLeft = 0;
      }
    } else if (direction === "right") {
      this.positionLeft += this.velocity;
      if (this.positionLeft >= myGame.width - this.width) {
        this.positionLeft = myGame.width - this.width;
      }
    }
    this.element.style.left = this.positionLeft + "px";
  }
}

const player = new Player()
