import { Difficulty } from "./Difficulty.js";
class Bomb {
  #rand() {
    const rowsNumber = document.querySelectorAll(".row").length;

    let randomX = Math.floor(Math.random() * rowsNumber);
    let randomY = Math.floor(Math.random() * rowsNumber);

    return {
      row: randomX,
      column: randomY,
    };
  }

  #exists(bombs, bomb) {
    let exists = false;

    bombs.forEach((item) => {
      if (item.row == bomb.row && item.column == bomb.column) {
        exists = true;
      }
    });

    return exists;
  }

  generate() {
    const difficulty = new Difficulty();
    let numberBombs = difficulty.ChooseDifficulty();

    let bombs = [];

    for (let index = 0; index < numberBombs; index++) {
      let bomb = this.#rand();

      while (this.#exists(bombs, bomb)) bomb = this.#rand();

      bombs.push(bomb);
    }

    return bombs;
  }
}

export { Bomb };
