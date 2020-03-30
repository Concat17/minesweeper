import { findMinesAround } from "../openCell";
import * as MyTypes from "MyTypes";
// import {test} from "jest"

const cell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: false, minesAround: 0 };
};

const minedCell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: true, minesAround: 0 };
};

let field1: MyTypes.CellModel[][] = [[cell(), minedCell()]];

test("test", () => {
  expect(findMinesAround(field1, 0, 0)).toBe(1);
});
