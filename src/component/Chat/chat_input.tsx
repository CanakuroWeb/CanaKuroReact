import { useRef } from "react";

function Chat_input({ ws }: { ws: WebSocket }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const doSubmit = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      ws.send(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div id="chat-input">
      <input ref={inputRef} style={{ maxHeight: "200px", overflow: "scroll", overflowX: "hidden" }} placeholder="메시지 입력" />
      <button onClick={doSubmit}>전송</button>
    </div>
  );
}

export default Chat_input;
