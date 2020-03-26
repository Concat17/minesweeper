import * as MyTypes from "MyTypes";

type FieldParams = {
  width: number;
  height: number;
  mines: number;
};

const cell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: false };
};

export function generateField(difficult: string): MyTypes.CellModel[][] {
  const params: FieldParams = setParams(difficult);
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

function setParams(difficult: string): FieldParams {
  switch (difficult) {
    case "easy":
      return { width: 10, height: 8, mines: 10 }; // 10
    case "medium":
      return { width: 18, height: 14, mines: 40 }; // 40
    case "hard":
      return { width: 24, height: 20, mines: 99 }; // 99
    default:
      throw new Error("Incorrect difficult");
  }
}
