export type Todo = {
    id: number,
    member: string,
    date: string, // TODO: 날짜표현방법 검색하기
    message: string,
    doneMark: boolean,
}

export type TodoInputForm = {
    member: string,
    message: string,
}

export type TodoList = {
    nextID: number,
    todoList: Todo[]
}