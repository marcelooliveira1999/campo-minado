const inputDifficulty = document.querySelectorAll(".difficulty");
let currentDifficulty = "easy";

class Difficulty {
  ChooseDifficulty() {
    const rowsNumber = document.querySelectorAll(".row").length;

    let amountBombs = 0;
    let difficulty = null;

    inputDifficulty.forEach((e) => (e.checked ? (difficulty = e.getAttribute("id")) : e));
    currentDifficulty = difficulty;

    switch (difficulty) {
      case "easy":
        amountBombs = rowsNumber * rowsNumber * 0.1;
        break;
      case "normal":
        amountBombs = rowsNumber * rowsNumber * 0.15;
        break;
      case "hard":
        amountBombs = rowsNumber * rowsNumber * 0.2;
        break;
      default:
        amountBombs = 3;
        break;
    }

    return Math.floor(amountBombs);
  }
}

export { Difficulty, currentDifficulty };
