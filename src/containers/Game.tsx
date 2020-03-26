import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";

import Header from "../components/Header/Header";
import Background from "../components/Background/Background";

import "./Game.css";

interface GameProps {
  difficult: string;
  field: MyTypes.CellModel[][];
}

const Game: React.FC<GameProps> = ({ difficult, field }: GameProps) => {
  const cellSize = setCellSize(difficult);
  return (
    <div className="game">
      <Header>{difficult}</Header>
      <Background cellSize={cellSize} field={field} />
    </div>
  );
};

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    difficult: store.game.difficult,
    field: store.game.field
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({});

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
