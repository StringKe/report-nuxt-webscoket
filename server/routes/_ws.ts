export default defineWebSocketHandler({
    upgrade (req) {
        console.log("[ws] upgrade", req);
    },
    open(peer) {
        console.log("[ws] open", peer);
    },
    message(peer, message) {
        console.log("[ws] message", peer, message);
        if (message.text().includes("ping")) {
            peer.send("pong");
        } else if (message.text().includes("hello")) {
            peer.send("world");
        }
    },
    close(peer, event) {
        console.log("[ws] close", peer, event);
    },
    error(peer, error) {
        console.log("[ws] error", peer, error);
    },
})