import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";
import { generateField } from "../logic/generateField";
import { OpenCell } from "../logic/openCell";
import { stat } from "fs";

export const initialState: MyTypes.GameModel = {
  difficult: "easy",
  field: generateField("easy")
};

export const gameReducer = (
  state: MyTypes.GameModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    case actionTypes.CLICKCELL: {
      const newField = [...state.field];
      const { row, col } = action.payload;
      //console.log(`in reducer ${row} ${col}`);
      OpenCell(newField, row, col);
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
