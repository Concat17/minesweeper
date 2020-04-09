import * as React from "react";
import * as MyTypes from "MyTypes";

import "./Cell.css";

interface CellProps {
  difficult: string;
  row: number;
  col: number;
  data: MyTypes.CellModel;
  clickCell: (row: number, col: number) => object;
  markCell: (row: number, col: number) => object;
}

const Cell: React.FC<CellProps> = ({
  difficult,
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
  const cellClass = generateCellCssClass(difficult, row, col, data);

  return (
    <div
      className={cellClass}
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
      </div>
      <div className="cell-flag">
        {data.isFlaged ? <i className="fas fa-flag"> </i> : ""}
      </div>
    </div>
  );
};

export default Cell;

function generateCellCssClass(
  difficult: string,
  row: number,
  col: number,
  data: MyTypes.CellModel
) {
  let cellClass = "cell";
  let color = "";
  if (!data.isOpen) {
    if (data.isFlaged) {
      cellClass += " flagged";
    }
    cellClass =
      (row + col) % 2 === 0
        ? (cellClass += " closed-dark")
        : (cellClass += " closed-light");
  } else {
    if (data.isMined) {
      cellClass += " mined";
    } else {
      cellClass =
        (row + col) % 2 === 0
          ? (cellClass += " open-dark")
          : (cellClass += " open-light");
    }
  }

  switch (difficult) {
    case "easy": {
      cellClass += " small";
      break;
    }
    case "medium": {
      cellClass += " medium";
      break;
    }
    case "hard": {
      cellClass += " big";
      break;
    }
    default: {
      throw new Error("Invalid difficulty");
    }
  }
  return cellClass;
}
