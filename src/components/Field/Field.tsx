import * as React from "react";
import * as MyTypes from "MyTypes";

import FieldRow from "../Field/FieldRow/FieldRow";

import "./Field.css";
import Cell from "../Cell/Cell";

interface FieldProps {
  cellSize: string;
  field: MyTypes.CellModel[][];
}

const Field: React.FC<FieldProps> = ({ cellSize, field }: FieldProps) => {
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
