import { configureStore } from "@reduxjs/toolkit";
import TodoListSliceReducer from "./TodoListSlice";

export const store = configureStore({
  reducer: {
    getTodoList: TodoListSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
