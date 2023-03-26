import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../variable/store";
import {deleteSignalTodo, deleteTodo, markTodo, setTodoList} from "../../variable/TodoListSlice";
import {Todo} from "../../types/types";
import axios from "axios";
import {useEffect} from "react";

function Todo_board() {
    const todoList = useSelector((state: RootState) => state.getTodoList.TodoData)
    const dispatch = useDispatch()
    console.log(todoList)

    /**함수 좀 길어서 따로 빼둠*/
    const deferDelete = (todo: Todo) => {
        dispatch(deleteSignalTodo(todo.id))
        setTimeout(() => {
            //todo.killing = true; > 스벨트랑 달라서 상당히 애먹네
            dispatch(deleteTodo(todo.id))
        }, 1000)
    }

    const getOnlineData = async () => {
        await axios.get("https://raw.githubusercontent.com/CanakuroWeb/CanakuroWeb.github.io/dev/test2/src/sample_data/todo_sample.json").then((response) => {
            dispatch(setTodoList(response.data))
        }).catch((e) => {
            alert("Cannot Connect to Server")
        })
    }

    const uploadData = async () => {
        await axios.post(
            "test-url",
            todoList // TODO: 변경된 부분만 전송..?
        ).catch((e) => {
            console.log("Upload fail")
        })
    }

    useEffect(() => {
        getOnlineData()
    }, [])

    useEffect(() => {
        uploadData()
    }, [todoList])

    return (         // TODO: 멤버 로그인? 식별? 로직짜기 ... 
        //> Lutica : 아마도 서버, SQL, 암호화(이건 크게가면 암호학, 양자컴퓨터까지 가겠지만 완전 다른영역이긴 함), JWT같은 좀 많은 영역으로 넘어갈 것으로 보임.
        // 내 생각으로는 Vine님이면 서버(Java면 Sping 등)는 잘하실테니 대충 짜는것도 방법이겠지만...
        // && todo 완료 마크 찍히면 밑줄긋는거
        // > Lutica : in my guess, 아마도 class 쓰는게 도움이 될거라고 봐용. Git Diff보셈
        <div className="todo-display">
            <div>

                {todoList.todoList.map((todo) => { // 원소
                    return (
                        <div key={todo.id} className={"todo__item" + (todo.killing ? " todo__remove" : "") // 킬되는 순간.... 지연을 받고 삭제
                        }>
                            <div className="todo__text">
                            <span
                                style={todo.doneMark ? {textDecorationLine: "line-through"} : {}}>
                                    <div className="todo__writter">[{todo.member}]</div>
                                {todo.message}
                            </span>
                            </div>
                            <div className="todo__button">
                                <button onClick={() => deferDelete(todo)}>삭제</button>
                                <button onClick={
                                    () => dispatch(markTodo({id: todo.id, mark: !todo.doneMark}))
                                }>완료
                                </button>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Todo_board;