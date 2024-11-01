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

  removeFungi() {
    //this.element.style.position = "relative";
    this.element.style.display = "none";// lo saca del DOM igual que el metodo remove(). 
    //this.element.style.top = -10000 + "px";
    const fungiIndex = Fungus.fungusArray.indexOf(this);

    Fungus.fungusArray.splice(fungiIndex, 1);

  };
 
}

for (let i = 0; i < 1; i++) {
  new Fungus();
}
