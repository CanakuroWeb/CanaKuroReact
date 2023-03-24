import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo_board from "./component/Todo/todo_board";
import {Provider} from "react-redux";
import {store} from "./variable/store";
import Todo_input from "./component/Todo/todo_input";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Todo_input/>
            <Todo_board/>
        </Provider>
    </React.StrictMode>,
)
