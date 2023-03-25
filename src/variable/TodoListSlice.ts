import {TodoInputForm, TodoList} from "../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type struct = {
    TodoData: TodoList
}

const initialState: struct = {
    TodoData: {
        nextID: 0,
        todoList: []
    }
}

export const TodoListSlice = createSlice({
    name: "getTodoList",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoInputForm>) => {
            state.TodoData.todoList.unshift({
                ...action.payload,
                id: state.TodoData.nextID,
                doneMark: false,
                date: new Date().toDateString()
            })
            state.TodoData.nextID += 1
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.TodoData.todoList = state.TodoData.todoList.filter((todo) => todo.id !== action.payload)
        },
        markTodo: (state, action: PayloadAction<{ id: number, mark: boolean }>) => {
            state.TodoData.todoList = state.TodoData.todoList.map((todo) => todo.id === action.payload.id ? {
                ...todo,
                doneMark: action.payload.mark
            } : todo)
        },
        editTodo: (state, action: PayloadAction<{ id: number, message: string }>) => {
            state.TodoData.todoList = state.TodoData.todoList.map((todo) => todo.id === action.payload.id ? {
                ...todo,
                message: action.payload.message
            } : todo)
        },
    }
})

export const {addTodo, deleteTodo, markTodo, editTodo} = TodoListSlice.actions
export default TodoListSlice.reducer