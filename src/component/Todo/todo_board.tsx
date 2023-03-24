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
                        <p>[{todo.member}]{todo.message}</p>
                        <p onClick={() => dispatch(deleteTodo(todo.id))}>삭제</p>
                        <p onClick={() => dispatch(markTodo({id: todo.id, mark: true}))}>완료</p>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Todo_board;