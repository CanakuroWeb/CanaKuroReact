import { useEffect, useRef } from "react";

function Chat_board({ ws }: { ws: WebSocket }) {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected!");
      const element = document.createElement("p");
      element.innerText = "Connected!";
      divRef.current?.insertAdjacentElement("afterbegin", element);
    };
    ws.onmessage = event => {
      console.log(event.data);
      const element = document.createElement("p");
      element.innerText = event.data;
      divRef.current?.insertAdjacentElement("afterbegin", element);
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        height: "22vw",
        width: "25vw",
        overflowY: "scroll",
      }}
      id="chat-board"
    ></div>
  );
}

export default Chat_board;
