import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";
import { generateField, addMines, setParams } from "../logic/generateField";
import { OpenCell, OpenCell2, OpenRightClick } from "../logic/openCell";
import { stat } from "fs";
import Field from "src/components/Field/Field";

export const initialState: MyTypes.GameModel = {
  isStart: false,
  isWasted: false,
  flags: setParams("easy").mines,
  difficult: "easy",
  field: generateField("easy"),
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
        OpenCell2(newField, row, col);
        return buildState(
          !state.isStart,
          state.isWasted,
          state.flags,
          state.difficult,
          newField
        );
      }
      OpenCell2(newField, row, col);
      return buildState(
        state.isStart,
        state.isWasted,
        state.flags,
        state.difficult,
        newField
      );
    }
    case actionTypes.MARKCELL: {
      const newField = [...state.field];
      const { row, col } = action.payload;
      if (!state.field[col][row].isOpen) {
        //let newFlags = state.flags;
        const newFlags = state.field[col][row].isFlaged
          ? state.flags + 1
          : state.flags - 1;
        newField[col][row].isFlaged = !newField[col][row].isFlaged;
        return buildState(
          state.isStart,
          state.isWasted,
          newFlags,
          state.difficult,
          newField
        );
      } else {
        OpenRightClick(newField, row, col);
        return buildState(
          state.isStart,
          state.isWasted,
          state.flags,
          state.difficult,
          newField
        );
      }
    }
    case actionTypes.CHANGEDIFFICULTY: {
      const { difficulty } = action.payload;
      const newState = {
        isStart: false,
        isWasted: false,
        flags: setParams(difficulty).mines,
        difficult: difficulty,
        field: generateField(difficulty),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

function buildState(
  isStart: boolean,
  isWasted: boolean,
  flags: number,
  difficult: string,
  field: MyTypes.CellModel[][]
): MyTypes.GameModel {
  return {
    isStart: isStart,
    isWasted: isWasted,
    flags: flags,
    difficult: difficult,
    field: field,
  };
}
