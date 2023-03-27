import { useEffect, useRef, useState } from "react";

export default function Ws_test() {
  const [ws] = useState<WebSocket>(new WebSocket("ws://localhost:8080"));
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected!");
    };
    ws.onmessage = event => {
      console.log(event.data);
      if (divRef.current) {
        divRef.current.innerText = event.data;
      }
    };
  }, []);

  return (
    <>
      <div ref={divRef}></div>
      <button
        onClick={() => {
          ws.send("testMessage");
        }}
      >
        button
      </button>
    </>
  );
}
