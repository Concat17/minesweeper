import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import store from "./store/store";

import { findMinesAround } from "./logic/openCell";
import * as MyTypes from "MyTypes";

const cell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: false, minesAround: 0 };
};

const minedCell = (): MyTypes.CellModel => {
  return { isOpen: false, isMined: true, minesAround: 0 };
};

let field1: MyTypes.CellModel[][] = [[cell(), minedCell()]];

console.log(findMinesAround(field1, 0, 0));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
