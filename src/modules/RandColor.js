class RandColors {
  static randomColors() {
    const colomns = document.querySelectorAll(".column");

    colomns.forEach((element) => {
      let random = Math.floor(Math.random() * 4);

      switch (random) {
        case 1:
          element.classList.add("rand-color-one");
          break;
        case 2:
          element.classList.add("rand-color-two");
          break;
        case 3:
          element.classList.add("rand-color-three");
          break;

        default:
          element.classList.add("rand-color-four");
          break;
      }
    });
  }

  static removeColors(currentElement) {
    const colors = ["rand-color-one", "rand-color-two", "rand-color-three", "rand-color-four"];

    colors.forEach((color) => {
      if (currentElement.classList.contains(color)) currentElement.classList.remove(color);
    });
  }
}

export { RandColors };
