import * as MyTypes from "MyTypes";

type FieldSize = {
  width: number;
  height: number;
};

export function generateField(difficult: string): MyTypes.CellModel[][] {
  const size: FieldSize = setSize(difficult);
  let field = [];
  for (let i = 0; i < size.height; i++) {
    const row = [];
    for (let j = 0; j < size.width; j++) {
      row.push(cell());
    }
    field.push(row);
  }
  return field;
}

function setSize(difficult: string): FieldSize {
  switch (difficult) {
    case "easy":
      return { width: 10, height: 8 };
    case "medium":
      return { width: 18, height: 14 };
    case "hard":
      return { width: 24, height: 20 };
    default:
      throw new Error("Incorrect difficult");
  }
}

const cell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: false };
};
