class Enemy {
  static enemyArray = [];
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("enemy");
    myGame.element.appendChild(this.element);

    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionBottom = this.element.getBoundingClientRect().bottom;
    this.positionLeft = myGame.width - 100;
    this.positionTop = Math.random() * (myGame.height - this.height);
    //cosas que agregue para tratar de realizar movimiento.
    this.velocity = 2;
    this.element.style.left = this.positionLeft + "px";
    this.element.style.top = this.positionTop + "px";

    Enemy.enemyArray.push(this);
  }

  removeEnemy() {
    this.element.remove();
    const enemyIndex = Enemy.enemyArray.indexOf(this);
    Enemy.enemyArray.splice(enemyIndex, 1);
  }

  move() {
    this.positionLeft -= this.velocity;

    if (this.positionLeft <= 0) {
      this.removeEnemy();
    }

    this.element.style.left = this.positionLeft + "px";
  }
}

const createEnemies = () => {
  setInterval(() => {
    new Enemy();
  }, 1500);
};
/*for (let i = 0; i < 7; i++) {
  new Enemy();
}*/
