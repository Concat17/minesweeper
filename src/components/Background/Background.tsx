import * as React from "react";
import * as MyTypes from "MyTypes";

import Field from "../Field/Field";

import "./Background.css";

interface BackgroundProps {
  cellSize: string;
  field: MyTypes.CellModel[][];
  clickCell: (row: number, col: number) => object;
}

const Background: React.FC<BackgroundProps> = ({
  cellSize,
  field,
  clickCell
}: BackgroundProps) => {
  return (
    <div className="background">
      <Field cellSize={cellSize} field={field} clickCell={clickCell} />
    </div>
  );
};

export default Background;
