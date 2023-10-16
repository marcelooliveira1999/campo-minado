import { CheckPlays } from "./CheckPlays.js";
const addBomb = new CheckPlays();

const lifesImagesContainer = document.getElementById("lifes");
const path = "./assets/life/";
const lifesImages = {
  true: {
    path: "cat-life-true.png",
  },
  false: {
    path: "cat-life-false.png",
  },
};
let lifesTrueArr = [];

class Life {
  life() {
    let amountLifes = this.toggleAmountLifes();
    let lifes = "";

    for (let i = 0; i < 5; i++) {
      let image = i < amountLifes ? lifesImages.true.path : lifesImages.false.path;
      if (i < amountLifes) lifesTrueArr.push({ imageId: `life-${i}` });

      lifes += `<img id="life-${i}" class="life" src="${path}${image}" alt="" />`;
    }

    lifesImagesContainer.innerHTML = lifes;
  }

  toggleAmountLifes() {
    const rows = document.querySelectorAll(".row");
    let amountRows = rows.length;
    let amountLifes = 0;

    if (amountRows > 6 && amountRows < 10) amountLifes = 1;
    if (amountRows >= 10 && amountRows < 14) amountLifes = 2;
    if (amountRows >= 14 && amountRows < 17) amountLifes = 3;
    if (amountRows >= 17 && amountRows < 20) amountLifes = 4;
    if (amountRows == 20) amountLifes = 5;

    return amountLifes;
  }

  loseLife(currentElement) {
    if (lifesTrueArr.length == 0) return;

    let lestElement = lifesTrueArr.length - 1;
    let element = lifesTrueArr[lestElement].imageId;

    const lifeImage = document.getElementById(element);

    if (lifesTrueArr.length > 0) lifeImage.src = `${path}${lifesImages.false.path}`;
    if (lifesTrueArr.length == 0) lose = true;

    this.addBomb(currentElement);

    lifesTrueArr.pop();
  }

  addBomb(currentElement) {
    const rows = document.querySelectorAll(".row");

    const valueInPX = 500 / rows.length / 2;

    currentElement.classList.add("lose");
    currentElement.style.fontSize = `${valueInPX}px`;
    currentElement.value = "💣";
  }

  static resetLifes() {
    lifesTrueArr = [];
  }
}

export { Life, lifesTrueArr };
