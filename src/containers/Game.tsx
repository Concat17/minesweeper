import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";

import Header from "../components/Header/Header";
import Background from "../components/Background/Background";

import "./Game.css";
import { actionTypes } from "../actions/actions";

interface GameProps {
  flags: number;
  difficult: string;
  field: MyTypes.CellModel[][];
  clickCell: (row: number, col: number) => object;
  markCell: (row: number, col: number) => object;
  changeDifficulty: (difficulty: string) => object;
}

const Game: React.FC<GameProps> = ({
  flags,
  difficult,
  field,
  clickCell,
  markCell,
  changeDifficulty,
}: GameProps) => {
  const cellSize = setCellSize(difficult);
  return (
    <div
      className="game"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <Header flags={flags} changeDifficulty={changeDifficulty}>
        {difficult}
      </Header>
      <Background
        cellSize={cellSize}
        field={field}
        clickCell={clickCell}
        markCell={markCell}
      />
    </div>
  );
};

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    flags: store.game.flags,
    difficult: store.game.difficult,
    field: store.game.field,
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  clickCell: (row: number, col: number) =>
    dispatch({
      type: actionTypes.CLICKCELL,
      payload: { row, col },
    }),
  markCell: (row: number, col: number) =>
    dispatch({
      type: actionTypes.MARKCELL,
      payload: { row, col },
    }),
  changeDifficulty: (difficulty: string) =>
    dispatch({
      type: actionTypes.CHANGEDIFFICULTY,
      payload: { difficulty },
    }),
});

export default connect(MapStateToProps, MapDispatchToProps)(Game);

function setCellSize(difficult: string): string {
  switch (difficult) {
    case "easy":
      return "60px";
    case "medium":
      return "30px";
    case "hard":
      return "25px";
  }
}
