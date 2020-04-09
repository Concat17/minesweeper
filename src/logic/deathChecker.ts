import * as MyTypes from "MyTypes";

export function checkMinedCells(field: MyTypes.CellModel[][]) {
  return field.some((row) => row.some((cell) => cell.isMined && cell.isOpen));
}
