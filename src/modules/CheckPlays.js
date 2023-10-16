import { bombPositions } from "../main.js";

class CheckPlays {
  addBombInTheField() {
    const rows = document.querySelectorAll(".row");
    const elementsWithBombs = this.getAllElements();

    elementsWithBombs.forEach((element) => {
      const valueInPX = 500 / rows.length / 2;

      element.classList.add("lose");
      element.style.fontSize = `${valueInPX}px`;
      element.value = "💣";
    });
  }

  getAllElements() {
    const fieldElements = document.querySelectorAll(".column");
    const elementsWithBombs = [];

    fieldElements.forEach((element) => {
      const currentRow = element.getAttribute("data-row");
      const currentColumn = element.getAttribute("data-column");

      bombPositions.filter((value) =>
        value.row == currentRow && value.column == currentColumn ? elementsWithBombs.push(element) : false
      );
    });

    return elementsWithBombs;
  }

  checkMove(element) {
    const currentRow = element.getAttribute("data-row");
    const currentColumn = element.getAttribute("data-column");

    let exists = false;

    bombPositions.filter((val) => (val.row == currentRow && val.column == currentColumn ? (exists = true) : false));

    return exists;
  }

  win() {
    const allColumns = document.querySelectorAll(".column");
    const elementsWithBombs = this.getAllElements();

    allColumns.forEach((column) => {
      elementsWithBombs.forEach((columnWithBomb) => {
        if (column == columnWithBomb) return;

        column.classList.add("disable-all");
      });
    });
  }
}

export { CheckPlays };
