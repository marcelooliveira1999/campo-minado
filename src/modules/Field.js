class Field {
  #generate(rows, columns) {
    let field = "";

    for (let row = 0; row < rows; row++) {
      field += '<div class="row">';

      for (let column = 0; column < columns; column++) {
        field += `<input type="button" class="column" data-row="${row}" data-column="${column}"></input>`;
      }

      field += "</div>";
    }

    return field;
  }

  fieldInsert(rows = 4) {
    const columns = rows;

    const battleContainer = document.getElementById("field");
    battleContainer.innerHTML = this.#generate(rows, columns);
  }
}

export { Field };
