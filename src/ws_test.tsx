export default function Ws_test() {
    return (
        <>
            <button onClick={() => {
                const ws = new WebSocket("ws://localhost:8001")
                ws.send("testMessage")
            }}>button
            </button>
        </>
    )
}
