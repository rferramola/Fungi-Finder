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

  getPositionLeft() {
    return this.element.getBoundingClientRect().left;
  }

  getPositionBottom() {
    return this.element.getBoundingClientRect().bottom;
  }
}

for (let i = 0; i < 6; i++) {
  new Fungus();
}
