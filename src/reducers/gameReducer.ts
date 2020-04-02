import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";
import { generateField, addMines } from "../logic/generateField";
import { OpenCell } from "../logic/openCell";
import { stat } from "fs";

export const initialState: MyTypes.GameModel = {
  isStart: false,
  difficult: "hard",
  field: generateField("hard")
};

export const gameReducer = (
  state: MyTypes.GameModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    case actionTypes.CLICKCELL: {
      const newField = [...state.field];
      const { row, col } = action.payload;
      if (!state.isStart) {
        addMines(newField, state.difficult, { row, col });
        OpenCell(newField, row, col);
        return {
          isStart: !state.isStart,
          difficult: state.difficult,
          field: newField
        };
      }
      OpenCell(newField, row, col);
      return {
        isStart: state.isStart,
        difficult: state.difficult,
        field: newField
      };
    }
    case actionTypes.MARKCELL: {
      const newField = [...state.field];
      const { row, col } = action.payload;
      newField[col][row].isMarked = !newField[col][row].isMarked;
      return {
        difficult: state.difficult,
        field: newField
      };
    }
    default: {
      return state;
    }
  }
};
