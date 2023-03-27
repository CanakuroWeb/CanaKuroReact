import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../variable/TodoListSlice";

function Todo_input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitTodo = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      dispatch(
        addTodo({
          member: "testHuman",
          message: inputRef.current.value,
        }),
      );
      inputRef.current.value = "";
    } else {
      alert("Please Enter Message!");
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="todo-input">
      <input ref={inputRef} placeholder="무슨 일이 일어나고 있나요?" />
      <button onClick={submitTodo}>입력</button>
    </div>
  );
}

export default Todo_input;
