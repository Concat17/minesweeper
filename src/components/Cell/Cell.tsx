import * as React from "react";
import * as MyTypes from "MyTypes";

import "./Cell.css";

interface CellProps {
  size: string;
  row: number;
  col: number;
  data: MyTypes.CellModel;
}

const Cell: React.FC<CellProps> = ({ size, row, col, data }: CellProps) => {
  const color =
    (row + col) % 2 === 0 ? "rgb(133, 30, 102)" : "rgb(160, 36, 122)";
  return (
    <div
      onClick={() => {
        console.log(row + " " + col);
      }}
      className="cell"
      style={{ background: color, width: size, height: size }}
    >
      {data.isMined ? "mine" : "nope"}
    </div>
  );
};

export default Cell;
