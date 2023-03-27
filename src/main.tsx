import React from "react";
import ReactDOM from "react-dom/client";
import Todo_board from "./component/Todo/todo_board";
import { Provider } from "react-redux";
import { store } from "./variable/store";
import Todo_input from "./component/Todo/todo_input";
import "./App.css";
import Ws_test from "./ws_test";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="App">
      <Provider store={store}>
        <Todo_input />
        <Todo_board />
        <Ws_test />
      </Provider>
    </div>
  </React.StrictMode>,
);
