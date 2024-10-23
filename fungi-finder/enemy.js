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
    this.velocity = 10;
    this.direction = "right";
    this.positionRight = null;

    this.element.style.position = "absolute";
    this.element.style.left = this.positionLeft + "px";
    this.element.style.top = this.positionTop + "px";

    Enemy.enemyArray.push(this);
  }

  getPositionLeft() {
    return this.element.getBoundingClientRect().left;
  }

  getPositionBottom() {
    return this.element.getBoundingClientRect().bottom;
  }
// intente incorporarlo pero no funciono
  move(){
    
  }
}

for (let i = 0; i < 7; i++) {
  new Enemy();
}

const enemys = new Enemy();
