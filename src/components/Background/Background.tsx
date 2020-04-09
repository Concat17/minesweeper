import * as React from "react";
import * as MyTypes from "MyTypes";

import Field from "../Field/Field";

import "./Background.css";

interface BackgroundProps {
  difficult: string;
  field: MyTypes.CellModel[][];
  clickCell: (row: number, col: number) => object;
  markCell: (row: number, col: number) => object;
}

const Background: React.FC<BackgroundProps> = ({
  difficult,
  field,
  clickCell,
  markCell,
}: BackgroundProps) => {
  return (
    <div className="background">
      <Field
        difficult={difficult}
        field={field}
        clickCell={clickCell}
        markCell={markCell}
      />
    </div>
  );
};

export default Background;
