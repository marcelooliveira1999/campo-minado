import { currentDifficulty } from "./Difficulty.js";
import { CheckPlays } from "./CheckPlays.js";
import { Fish } from "./fish.js";

const checkPlays = new CheckPlays();

const progressContainer = document.getElementById("progress");
const catContainer = document.getElementById("cat-container");
const catImage = document.getElementById("cat-image");

const pathCatImages = "./assets/cat/marcelo/";
const cats = {
  stop: {
    catStop: "cat-stop.gif",
  },
  walk: {
    catWalk: "cat-walk.gif",
  },
  run: {
    catRun: "cat-run.gif",
  },
  eat: {
    catEat: "cat-eat.gif",
  },
  dead: {
    catDead: "cat-dead.gif",
  },
};

let pageWidth = progressContainer.clientWidth;
let [currentCatPosition, moviment] = [0, 0];
const percentCatPosition = 0.9;

class Cat {
  getPageWidth() {
    const pageWidthUpdate = () => {
      pageWidth = progressContainer.clientWidth;

      let columnsDisabled = 0;
      const getAllColumns = document.querySelectorAll(".column");
      getAllColumns.forEach((column) => (column.classList.contains("disabled") ? columnsDisabled++ : false));

      if (columnsDisabled > 0) {
        let aux = pageWidth / getAllColumns.length;
        aux = aux * columnsDisabled;

        currentCatPosition = pageWidth - aux;
      } else {
        currentCatPosition = pageWidth * percentCatPosition;
      }

      this.calculateMoviment();
    };

    window.addEventListener("load", pageWidthUpdate);
    window.addEventListener("resize", pageWidthUpdate);
  }

  calculateMoviment() {
    const getAllColumns = document.querySelectorAll(".column");
    let allColumns = getAllColumns.length;
    allColumns = allColumns * 0.95;

    switch (currentDifficulty) {
      case "easy":
        allColumns = Math.floor(allColumns * 0.8);
        moviment = pageWidth / allColumns;
        break;
      case "normal":
        allColumns = Math.floor(allColumns * 0.75);
        moviment = pageWidth / allColumns;
        break;
      case "hard":
        allColumns = Math.floor(allColumns * 0.7);
        moviment = pageWidth / allColumns;
        break;
    }
  }

  moveCat() {
    currentCatPosition = currentCatPosition - moviment;
    catContainer.style.right = `${currentCatPosition}px`;

    this.toggleImageCat(cats.stop.catStop, cats.walk.catWalk);

    setTimeout(() => {
      if (currentCatPosition >= 50) return;
      this.toggleImageCat(cats.stop.catStop, cats.eat.catEat, 5000, true);
      checkPlays.addBombInTheField();
      checkPlays.win();

      setTimeout(() => {
        const startButton = document.getElementById("start-button");
        startButton.click();
      }, 3000);
    }, 1000);
  }

  killCat() {
    this.toggleImageCat(cats.stop.catStop, cats.dead.catDead, 2500);

    setTimeout(() => {
      if (currentCatPosition != pageWidth * percentCatPosition) this.toggleImageCat(cats.stop.catStop, cats.run.catRun);

      currentCatPosition = pageWidth * 0.9;
      catContainer.style.right = `${currentCatPosition}px`;
    }, 2500);
  }

  returnCat() {
    if (currentCatPosition == pageWidth * percentCatPosition) return;

    this.toggleImageCat(cats.stop.catStop, cats.run.catRun, 1000);
    currentCatPosition = pageWidth * percentCatPosition;
    catContainer.style.right = `${currentCatPosition}px`;
  }

  toggleImageCat(hiddenCat, showCat, time = 1000, eatFish = false) {
    if (eatFish) Fish.eatFish();

    catImage.src = `${pathCatImages}${showCat}`;
    setTimeout(() => (catImage.src = `${pathCatImages}${hiddenCat}`), time);
  }
}

export { Cat, catContainer, currentCatPosition };
