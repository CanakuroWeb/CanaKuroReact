import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../variable/store";
import {deleteTodo, markTodo} from "../../variable/TodoListSlice";

function Todo_board() {
    const todoList = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    console.log(todoList)

    return ( // TODO: 멤버 로그인? 식별? 로직짜기 && todo 완료 마크 찍히면 밑줄긋는거
        <div className="todo-display">
            <ul>
                {todoList.getTodoList.TodoData.todoList.map((todo) => {
                    return (<li key={todo.id}>
                        <span
                            style={todo.doneMark ? {textDecorationLine: "line-through"} : {}}>[{todo.member}]{todo.message}</span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
                        <button onClick={() => dispatch(markTodo({id: todo.id, mark: !todo.doneMark}))}>완료</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Todo_board;