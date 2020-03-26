import { action } from "typesafe-actions";

export enum actionTypes {
  CLICKCELL = "CLICKCELL"
}

export const todoActions = {
  clickCell: (row: number, col: number) =>
    action(actionTypes.CLICKCELL, { row, col })
};
