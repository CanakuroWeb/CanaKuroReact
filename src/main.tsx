import React from "react";
import ReactDOM from "react-dom/client";
import Todo_board from "./component/Todo/todo_board";
import { Provider } from "react-redux";
import { store } from "./variable/store";
import Todo_input from "./component/Todo/todo_input";
import "./App.css";
import Chatbox from "./component/Chat/chatbox";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="App">
      <Provider store={store}>
        <Todo_input />
        <Todo_board />
        <Chatbox />
      </Provider>
    </div>
  </React.StrictMode>,
);
