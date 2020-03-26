import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";
import { generateField } from "../logic/generateField";

export const initialState: MyTypes.GameModel = {
  difficult: "easy",
  field: generateField("easy")
};

export const gameReducer = (
  state: MyTypes.GameModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
