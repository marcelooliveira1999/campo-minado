import { CheckPlays } from "./CheckPlays.js";
import { RandColors } from "./RandColor.js";
import { Cat } from "./Cat.js";
import { Life, lifesTrueArr } from "./Life.js";

const cat = new Cat();
const life = new Life();

class ClickEvent {
  addClickEvent() {
    const fieldElements = document.querySelectorAll(".column");

    function clickEvent() {
      this.removeEventListener("click", clickEvent);
      let lifes = lifesTrueArr.length;

      RandColors.removeColors(this);

      const checkPlays = new CheckPlays();
      let exists = checkPlays.checkMove(this);

      if (exists) life.loseLife(this);
      if (!exists) this.classList.add("disabled");

      if (exists && lifes == 0) checkPlays.addBombInTheField();
      if (exists && lifes == 0) removeClickEvent();

      if (!exists) cat.moveCat();
      if (exists && lifes == 0) cat.killCat();
    }

    function removeClickEvent() {
      fieldElements.forEach((element) => element.removeEventListener("click", clickEvent));
      fieldElements.forEach((element) => element.classList.add("disable-all"));
    }

    fieldElements.forEach(function (element) {
      element.addEventListener("click", clickEvent);
    });
  }
}

export { ClickEvent };
