import * as React from "react";
import * as MyTypes from "MyTypes";

import "./Field.css";
import Cell from "../Cell/Cell";

interface FieldProps {
  cellSize: string;
  field: MyTypes.CellModel[][];
  clickCell: (row: number, col: number) => object;
  markCell: (row: number, col: number) => object;
}

const Field: React.FC<FieldProps> = ({
  cellSize,
  field,
  clickCell,
  markCell
}: FieldProps) => {
  let col = -1;
  return (
    <div className="field">
      {field.map(rowField => {
        col += 1;
        let row = -1;
        return (
          <div key={col} className="field-row">
            {rowField.map(cell => {
              row += 1;
              return (
                <Cell
                  key={`${col}${row}`}
                  size={cellSize}
                  row={row}
                  col={col}
                  data={field[col][row]}
                  clickCell={clickCell}
                  markCell={markCell}
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
