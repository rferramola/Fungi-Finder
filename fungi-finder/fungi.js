class Fungus {
  static fungusArray = [];
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("fungus");
    myGame.element.appendChild(this.element);

    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionBottom = this.element.getBoundingClientRect().bottom;

    this.positionLeft = Math.random() * (myGame.width - this.width);
    this.positionTop = Math.random() * (myGame.height - this.height);

    this.element.style.left = this.positionLeft + "px";
    this.element.style.top = this.positionTop + "px";

    Fungus.fungusArray.push(this);
  }

  wrapFungi() {
    this.element.style.position = "relative";
    this.element.style.top = -10000 + "px";
    const fungiIndex = Fungus.fungusArray.indexOf(this);

    Fungus.fungusArray.splice(fungiIndex, 1);
  };
  // posiblemente esto de abajo no funciona, no rompe el codigo pero lo mantenemos por si acaso.
  /*getPositionLeft() {
    return this.element.getBoundingClientRect().left;
  }

  getPositionBottom() {
    return this.element.getBoundingClientRect().bottom;
  }*/
}

for (let i = 0; i < 8; i++) {
  new Fungus();
}
