declare module "MyTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  export type ReducerState = StateType<typeof import("../reducers").default>;
  export type RootAction = ActionType<typeof import("../actions/actions")>;

  export type GameModel = {
    isStart: boolean;
    difficult: string;
    field: CellModel[][];
  };

  export type CellModel = {
    isOpen: boolean;
    isMined: boolean;
    isMarked: boolean;
    minesAround: number;
  };
}
