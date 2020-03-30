import * as MyTypes from "MyTypes";

export function OpenCell(
  field: MyTypes.CellModel[][],
  row: number,
  col: number
) {}

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
        console.log(row + x);
        console.log(col + y);
        if (
          field[col + y][row + x] !== undefined &&
          field[col + y][row + x].isMined
        ) {
          mines += 1;
        }
      }
    }
  }
  return mines;
}
//  if (row + x < maxX && row + x > -1 && col + y < maxY && col + y > -1)
