import {useContext, useEffect, useRef, useState} from "react";
import {DarkModeContext, useDarkDispatch} from "./DarkModeState";

function Todo() {
    const [list, setList] = useState<{ id: number, value: string }[]>([])
    const input = useRef<HTMLInputElement>(null)

    const {mode} = useContext(DarkModeContext)
    const dispatch = useDarkDispatch()
    console.log(mode)
    // 왜 콘솔로그 두개씩?
    // input state 바뀔때마다 콘솔로그찍히는ㄴ거보면 onChange하면 리로드되는거같은데 안좋은상황인듯? -> 고침
    // useMemo 쓰면 되는가? 일단잘거임몰라
    // webstorm 커밋은되는데 푸시 안눌려서 콘솔로 하는중

    useEffect(() => {
        input.current?.focus()
    }, [])

    const saveInput = () => {
        if (input.current) {
            setList([{id: list.length + 1, value: input.current.value}, ...list])
            input.current.value = ""
            input.current.focus()
        }
    } // function이랑 람다에 이름붙이는거 차이??

    return (
        <div className="todo-place">
            <div className="todo-input">
                <input ref={input}
                       placeholder="무슨 일이 일어나고 있나요?"/>
                <button onClick={saveInput}>
                    확인
                </button>
            </div>
            <div className="todo-list">
                <ul>
                    {list.map(todo => {
                        return (
                            <li key={todo.id}>{todo.value}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <p>다크모드 상태: {mode ? "다크" : "화이트"}</p>
                <button onClick={() => dispatch({type: "TOGGLE"})}>토글</button>
                <button onClick={() => dispatch({type: "SET", mode: true})}>다크</button>
                <button onClick={() => dispatch({type: "SET", mode: false})}>화이트</button>
            </div>
        </div>
    )//TODO
}

export default Todo