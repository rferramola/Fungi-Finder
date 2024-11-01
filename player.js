class Player {
  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "player");
    myGame.element.appendChild(this.element);

    /* this.top = 0; */
    this.positionLeft = 0;
    this.velocity = 10;
    this.direction = null;
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionTop = myGame.height / 2 - this.height / 2;
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
      this.positionTop -= this.velocity;
      if (this.positionTop <= 0) {
        this.positionTop = 0;
      }
    } else if (direction === "bottom") {
      this.positionTop += this.velocity;
      if (this.positionTop >= myGame.height - this.height) {
        this.positionTop = myGame.height - this.height;
      }
    }
    //console.log(this.positionLeft, this.positionTop);
    this.element.style.left = this.positionLeft + "px";
    this.element.style.top = this.positionTop + "px";
  }
}

const player = new Player();
