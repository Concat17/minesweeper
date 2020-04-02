import * as MyTypes from "MyTypes";

export function OpenCell(
  field: MyTypes.CellModel[][],
  row: number,
  col: number
) {
  if (!field[col][row].isOpen) {
    let myFunc = makeFunc();
    const mines = findMinesAround2(field, row, col, myFunc);
    field[col][row].minesAround = mines;
    field[col][row].isOpen = true;
    const maxX = field[0].length;
    const maxY = field.length;
    if (mines === 0) {
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          if (
            row + x < maxX &&
            row + x > -1 &&
            col + y < maxY &&
            col + y > -1
          ) {
            OpenCell(field, row + x, col + y);
          }
        }
      }
    }
  }
}

export function findMinesAround(
  field: MyTypes.CellModel[][],
  row: number,
  col: number
): number {
  const maxX = field[0].length;
  const maxY = field.length;
  let mines = 0;
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      if (row + x < maxX && row + x > -1 && col + y < maxY && col + y > -1) {
        if (field[col + y][row + x].isMined) {
          mines += 1;
        }
      }
    }
  }
  return mines;
}

function walkField(
  field: MyTypes.CellModel[][],
  row: number,
  col: number,
  func
) {
  const maxX = field[0].length;
  const maxY = field.length;
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      if (row + x < maxX && row + x > -1 && col + y < maxY && col + y > -1) {
        func(field, row + x, col + y);
      }
    }
  }
  return func(field, row, col);
}
//  if (row + x < maxX && row + x > -1 && col + y < maxY && col + y > -1)  field[col + y][row + x].isMined)
// let myFunc = makeFunc()
function makeFunc() {
  //if (field[col + y][row + x].isMined) {
  let count = 0;
  function countUp(field: MyTypes.CellModel[][], row: number, col: number) {
    if (field[col][row].isMined) count++;
    return count;
  }
  return countUp;
}

export function findMinesAround2(
  field: MyTypes.CellModel[][],
  row: number,
  col: number,
  func
): number {
  return walkField(field, row, col, func);
}

export function OpenCell2(
  field: MyTypes.CellModel[][],
  row: number,
  col: number
) {
  if (!field[col][row].isOpen) {
    let myFunc = makeFunc();
    const mines = findMinesAround2(field, row, col, myFunc);
    field[col][row].minesAround = mines;
    field[col][row].isOpen = true;
    if (mines === 0) walkField(field, row, col, OpenCell2);
  }
}
