import { TodoInputForm, TodoList } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type struct = {
  TodoData: TodoList;
};

const initialState: struct = {
  TodoData: {
    nextID: 0,
    todoList: [],
  },
};

export const TodoListSlice = createSlice({
  name: "getTodoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoInputForm>) => {
      state.TodoData.todoList.unshift({
        ...action.payload,
        id: state.TodoData.nextID,
        doneMark: false,
        date: new Date().toDateString(),
        killing: false,
      });
      state.TodoData.nextID += 1;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.TodoData.todoList = state.TodoData.todoList.filter(todo => todo.id !== action.payload);
    },
    markTodo: (state, action: PayloadAction<{ id: number; mark: boolean }>) => {
      state.TodoData.todoList = state.TodoData.todoList.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              doneMark: action.payload.mark,
            }
          : todo,
      );
    },
    editTodo: (state, action: PayloadAction<{ id: number; message: string }>) => {
      state.TodoData.todoList = state.TodoData.todoList.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              message: action.payload.message,
            }
          : todo,
      );
    },
    deleteSignalTodo: (state, action: PayloadAction<number>) => {
      state.TodoData.todoList = state.TodoData.todoList.map(todo =>
        todo.id === action.payload
          ? {
              ...todo,
              killing: true,
            }
          : todo,
      );
    },
    setTodoList: (state, action: PayloadAction<TodoList>) => {
      state.TodoData = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, markTodo, editTodo, deleteSignalTodo, setTodoList } = TodoListSlice.actions;
export default TodoListSlice.reducer;
