declare module "MyTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  export type ReducerState = StateType<typeof import("../reducers").default>;
  export type RootAction = ActionType<typeof import("../actions/actions")>;

  export type GameModel = {
    isStart: boolean;
    isWasted: boolean;
    flags: number;
    difficult: string;
    field: CellModel[][];
  };

  export type CellModel = {
    isOpen: boolean;
    isMined: boolean;
    isFlaged: boolean;
    minesAround: number;
  };
}
