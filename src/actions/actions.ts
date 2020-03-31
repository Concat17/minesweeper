import { action } from "typesafe-actions";

export enum actionTypes {
  CLICKCELL = "CLICKCELL",
  MARKCELL = "MARKCELL"
}

export const todoActions = {
  clickCell: (row: number, col: number) =>
    action(actionTypes.CLICKCELL, { row, col }),
  markCell: (row: number, col: number) =>
    action(actionTypes.MARKCELL, { row, col })
};
