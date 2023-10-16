import { Main } from "../main.js";
import { Cat } from "./Cat.js";
import { Fish } from "./fish.js";
import { Life } from "./Life.js";

const cat = new Cat();

const startButton = document.getElementById("start-button");
const inputFieldFormat = document.getElementById("input-field-format");

let fieldFormat = 4;

class StartGame {
  getDataInput() {
    const startGame = () => {
      const inputFieldFormatValue = inputFieldFormat.value;
      const rowsNumber = inputFieldFormatValue === "" ? 4 : inputFieldFormatValue;
      const formatIsValid = this.verifyNumberInput(rowsNumber);

      Life.resetLifes();

      if (formatIsValid) fieldFormat = rowsNumber;

      Main.start(fieldFormat);

      cat.getPageWidth();
      cat.calculateMoviment();
      cat.returnCat();

      Fish.switchFish(fieldFormat);
      Fish.returnFish();

      setTimeout(() => {
        inputFieldFormat.blur();
      }, 500);
    };

    startButton.addEventListener("click", startGame);
    window.addEventListener("keydown", (e) => {
      let currentKey = e.code;
      if (currentKey === "Enter") startGame();

      inputFieldFormat.focus();
    });

    inputFieldFormat.addEventListener("input", () => {
      let currentValue = inputFieldFormat.value;
      if (currentValue.length > 2) inputFieldFormat.value = currentValue.substr(1);

      inputFieldFormat.classList.remove("erro");
    });
  }

  verifyNumberInput(number) {
    let isValid = false;

    if ((number > 3 && number < 21) || number === null) isValid = true;
    if (!isValid) alert("Valor invalido\nO compo continuará com o tamanho atual!!!");

    return isValid;
  }
}

export { StartGame };
