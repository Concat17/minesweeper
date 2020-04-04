import * as React from "react";
import * as MyTypes from "MyTypes";

import "./Cell.css";

interface CellProps {
  size: string;
  row: number;
  col: number;
  data: MyTypes.CellModel;
  clickCell: (row: number, col: number) => object;
  markCell: (row: number, col: number) => object;
}

const Cell: React.FC<CellProps> = ({
  size,
  row,
  col,
  data,
  clickCell,
  markCell,
}: CellProps) => {
  let color = "";

  if (!data.isOpen) {
    if (data.isFlaged) {
      color = "yellow";
    } else {
      color = (row + col) % 2 === 0 ? "rgb(133, 30, 102)" : "rgb(160, 36, 122)";
    }
  } else {
    if (data.isMined) {
      color = "black";
    } else {
      color = (row + col) % 2 === 0 ? "rgb(100, 91, 91)" : "rgb(128, 117, 117)";
    }
  }

  return (
    <div
      className="cell"
      style={{ background: color, width: size, height: size }}
      onMouseDown={(e: React.MouseEvent) => {
        if (e.button === 0) {
          e.preventDefault();
          clickCell(row, col);
        } else if (e.button === 2) {
          markCell(row, col);
        }
      }}
    >
      <div className="mines-around">
        {data.minesAround === 0 || data.isMined ? "" : data.minesAround}
        {/* data.minesAround > 0 ? data.minesAround : "" */}
      </div>
    </div>
  );
};

export default Cell;
