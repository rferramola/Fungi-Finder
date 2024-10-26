class Enemy {
  static enemyArray = [];
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("enemy");
    myGame.element.appendChild(this.element);

    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionBottom = this.element.getBoundingClientRect().bottom;

    this.positionLeft = Math.random() * (myGame.width - this.width);
    this.positionTop = Math.random() * (myGame.height - this.height);
    //cosas que agregue para tratar de realizar movimiento.
    this.velocity = 2;
    this.element.style.left = this.positionLeft + "px";
    this.element.style.top = this.positionTop + "px";

    Enemy.enemyArray.push(this);
  }

  /* getPositionLeft() {
    return this.element.getBoundingClientRect().left;
  }

  getPositionTop() {
    return this.element.getBoundingClientRect().top;
  } */

  // 
  move() {
    this.positionLeft -= this.velocity;
    // console.log(this.positionLeft);
    
    if (this.positionLeft <= 0) {
      this.positionLeft = myGame.width - this.width;
      this.positionTop = Math.random() * (myGame.height - this.height);
      this.element.style.top = this.positionTop + "px";
    }

    this.element.style.left = this.positionLeft + "px";
  }
}

for (let i = 0; i < 7; i++) {
  new Enemy();  
}
