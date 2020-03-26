import * as React from "react";
import * as MyTypes from "MyTypes";

import "./Cell.css";

interface CellProps {
  size: string;
  row: number;
  col: number;
  data: MyTypes.CellModel;
  clickCell: (row: number, col: number) => object;
}

const Cell: React.FC<CellProps> = ({
  size,
  row,
  col,
  data,
  clickCell
}: CellProps) => {
  let color = (row + col) % 2 === 0 ? "rgb(100, 91, 91)" : "rgb(128, 117, 117)";
  if (!data.isOpen) {
    color = (row + col) % 2 === 0 ? "rgb(133, 30, 102)" : "rgb(160, 36, 122)";
  }

  return (
    <div
      className="cell"
      style={{ background: color, width: size, height: size }}
      onMouseDown={() => clickCell(row, col)}
    ></div>
  );
};

export default Cell;
