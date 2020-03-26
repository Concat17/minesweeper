import * as React from "react";
import * as MyTypes from "MyTypes";

import Field from "../Field/Field";

import "./Background.css";

interface BackgroundProps {
  cellSize: string;
  field: MyTypes.CellModel[][];
}

const Background: React.FC<BackgroundProps> = ({
  cellSize,
  field
}: BackgroundProps) => {
  return (
    <div className="background">
      <Field cellSize={cellSize} field={field} />
    </div>
  );
};

export default Background;
