"use strict";

import { Field } from "./modules/Field.js";
import { Bomb } from "./modules/Bomb.js";
import { ClickEvent } from "./modules/ClickEvent.js";
import { StartGame } from "./modules/StartGame.js";
import { RandColors } from "./modules/RandColor.js";
import { Cat } from "./modules/Cat.js";
import { Life } from "./modules/Life.js";
import { ShowInfo } from "./modules/ShowInfo.js";

let bombPositions = null;
class Main {
  static start(rowsNumber) {
    const fieldConstruct = new Field();
    fieldConstruct.fieldInsert(rowsNumber);

    RandColors.randomColors();

    const generateBombs = new Bomb();
    bombPositions = generateBombs.generate();

    const addEventInAllElements = new ClickEvent();
    addEventInAllElements.addClickEvent();

    const cat = new Cat();
    cat.getPageWidth();

    const lifes = new Life();
    lifes.life();
  }
}

Main.start();
ShowInfo();

const startGame = new StartGame();
startGame.getDataInput();

export { Main, bombPositions };
