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
    this.height = this.element.getBoundingClientRect().height;
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
    } else if (direction === "top") {
      this.positionBottom -= this.velocity;
      if (this.positionBottom <= 0) {
        this.positionBottom = 0;
      }
    } else if (direction === "bottom") {
      this.positionBottom += this.velocity;
      if (this.positionBottom >= myGame.height - this.height) {
        this.positionBottom = myGame.height - this.height;
      }
    }
    console.log(this.positionLeft, this.positionBottom);
    this.element.style.left = this.positionLeft + "px";
    this.element.style.top = this.positionBottom + "px";
  }
}

const player = new Player();
