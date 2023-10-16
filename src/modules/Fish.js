const fishImage = document.getElementById("fish-image");
const fishsImages = document.querySelectorAll(".fish");
const path = "./assets/food/";

const fishs = {
  low: {
    fish: "fish-01.png",
  },
  high: {
    fish: "fish-00.png",
  },
};

function toggleImageFish(showFish) {
  fishImage.src = `${path}${showFish}`;
}

function eat(fish) {
  let width = 80;
  let height = 50;

  const interval = setInterval(() => {
    width = width - 8;
    height = height - 5;

    fish.style.width = `${width}px`;
    fish.style.height = `${height}px`;

    fish.style.filter = "invert(100%)";

    setTimeout(() => (fish.style.filter = "invert(0)"), 150);

    if (width == 0) clearInterval(interval);
  }, 500);
}

class Fish {
  static switchFish(fieldFormat) {
    if (fieldFormat < 15) toggleImageFish(fishs.low.fish);
    if (fieldFormat >= 15) toggleImageFish(fishs.high.fish);
  }

  static eatFish() {
    fishsImages.forEach((fish) => {
      eat(fish);
    });
  }

  static returnFish() {
    setTimeout(() => {
      fishsImages.forEach((fish) => {
        fish.style.width = `80px`;
        fish.style.height = `50px`;
      });
    }, 3000);
  }
}

export { Fish };
