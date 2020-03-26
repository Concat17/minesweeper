import * as React from "react";
import Game from "./containers/Game";

import "./App.css";

export const App: React.FC<{}> = () => {
  return (
    <div className="app">
      <Game />
    </div>
  );
};
