import * as MyTypes from "MyTypes";
import { findMinesAround, OpenCell } from "./openCell";

type FieldParams = {
  width: number;
  height: number;
  mines: number;
};

const cell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: false, minesAround: 0 };
};

export function generateField(difficult: string): MyTypes.CellModel[][] {
  const params: FieldParams = setParams(difficult);
  const field = createField(params);
  addMines(field, params.mines);
  return field;
}

function setParams(difficult: string): FieldParams {
  switch (difficult) {
    case "easy":
      return { width: 10, height: 8, mines: 10 };
    case "medium":
      return { width: 18, height: 14, mines: 40 };
    case "hard":
      return { width: 24, height: 20, mines: 99 };
    default:
      throw new Error("Incorrect difficult");
  }
}

function createField(params: FieldParams): MyTypes.CellModel[][] {
  let field = [];
  for (let i = 0; i < params.height; i++) {
    const row = [];
    for (let j = 0; j < params.width; j++) {
      row.push(cell());
    }
    field.push(row);
  }
  return field;
}

function addMines(field: MyTypes.CellModel[][], minesCount: number) {
  const freeCells = findFreeCells(field);
  for (let i = 0; i < minesCount; i++) {
    let index = Math.floor(Math.random() * freeCells.length);
    let cell = freeCells[index];
    field[cell.row][cell.col].isMined = true;
    freeCells.splice(index, 1);
  }
}

function findFreeCells(field: MyTypes.CellModel[][]) {
  const freeCells = [];
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      freeCells.push({ row: i, col: j });
    }
  }
  return freeCells;
}

function setMinesAround(field: MyTypes.CellModel[][]) {
  for (let row = 0; row < field[0].length; row++) {
    for (let col = 0; col < field.length; col++) {
      field[col][row].minesAround = findMinesAround(field, row, col);
    }
  }
}
