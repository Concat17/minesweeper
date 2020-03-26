import * as React from "react";
import * as MyTypes from "MyTypes";

import "./Field.css";
import Cell from "../Cell/Cell";

interface FieldProps {
  cellSize: string;
  field: MyTypes.CellModel[][];
  clickCell: (row: number, col: number) => object;
}

const Field: React.FC<FieldProps> = ({
  cellSize,
  field,
  clickCell
}: FieldProps) => {
  let row = -1;
  return (
    <div className="field">
      {field.map(rowField => {
        row += 1;
        let col = -1;
        return (
          <div key={row} className="field-row">
            {rowField.map(cell => {
              col += 1;
              return (
                <Cell
                  key={col}
                  size={cellSize}
                  row={row}
                  col={col}
                  data={field[row][col]}
                  clickCell={clickCell}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Field;
