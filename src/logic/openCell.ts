import * as MyTypes from "MyTypes";

export function OpenCell(
  field: MyTypes.CellModel[][],
  row: number,
  col: number
) {
  const maxX = field[0].length;
  const maxY = field.length;

  if (!field[col][row].isOpen) {
    const mines = findMinesAround(field, row, col);
    field[col][row].minesAround = mines;
    field[col][row].isOpen = true;
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
//  if (row + x < maxX && row + x > -1 && col + y < maxY && col + y > -1)  field[col + y][row + x].isMined)
