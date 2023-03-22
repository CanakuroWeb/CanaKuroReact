import React from 'react'
import ReactDOM from 'react-dom/client'
import {DarkModeContextProvider} from "./DarkModeState";
import Todo from "./todo";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <Todo/>
        </DarkModeContextProvider>
    </React.StrictMode>,
)
