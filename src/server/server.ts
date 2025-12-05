import{TimerState} from "./timerState";
import { Server } from "socket.io";

const io = new Server(3000, {
    cors: {
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Allow Vite
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
});

io.on("start", (socket) => {
    console.log("Client started:", socket.id);

    const timerState:TimerState = {
        isRunning: true
    };
    socket.emit("sync", timerState);
});

io.on("disconnection", (socket) => {
    console.log("Client disconnected:", socket.id);
});


console.log("Server running on port 3000");