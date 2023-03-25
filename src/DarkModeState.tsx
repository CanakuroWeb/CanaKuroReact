import React, {createContext, Dispatch, useContext, useReducer} from "react";

export type DarkMode = {
    mode: boolean
}

export const DarkModeContext = createContext<DarkMode>({mode: false})

type Action =
    | { type: 'TOGGLE' }
    | { type: 'SET', mode: boolean };
type DarkModeDispatch = Dispatch<Action>
export const DarkModeDispatchContext = createContext<DarkModeDispatch | undefined>(undefined)

function darkModeReducer(state: DarkMode, action: Action): DarkMode {
    switch (action.type) {
        case "TOGGLE":
            return {mode: !state.mode}
        case "SET":
            return {mode: action.mode}
        default:
            throw new Error("Undefined Action: DarkModeState")
    }
}

export function DarkModeContextProvider({children}: { children: React.ReactNode }) {
    const [mode, dispatch] = useReducer(darkModeReducer, {mode: false})
    return (
        <DarkModeDispatchContext.Provider value={dispatch}>
            <DarkModeContext.Provider value={mode}>
                {children}
            </DarkModeContext.Provider>
        </DarkModeDispatchContext.Provider>
    )
}

export function useDarkDispatch() {
    const dispatch = useContext(DarkModeDispatchContext);
    if (!dispatch) throw new Error('not found');
    return dispatch;
}