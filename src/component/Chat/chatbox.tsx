import { useState } from "react";
import Chat_board from "./chat_board";
import Chat_input from "./chat_input";

function Chatbox() {
  const [ws] = useState(new WebSocket("ws://localhost:8080"));
  const [hideChat, setHideChat] = useState(false);

  return (
    <div
      id="chatbox"
      style={{
        padding: "5px",
        outline: "auto",
        margin: "10px",
        position: "fixed",
        bottom: hideChat ? "-26vw" : "0vw",
        right: "0vw",
      }}
    >
      <button
        style={{
          maxHeight: "1vw",
          top: "1px",
          background: "white",
        }}
        onClick={() => setHideChat(!hideChat)}
      ></button>
      <Chat_input ws={ws} />
      <Chat_board ws={ws} />
    </div>
  );
}

export default Chatbox;
