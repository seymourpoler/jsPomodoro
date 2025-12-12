import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);

interface ServerToClientEvents {
    receive_message: (data: { message: string, sender: string }) => void;
}

interface ClientToServerEvents {
    send_message: (data: { message: string, sender: string }) => void;
}

// 2. Initialize Socket.io with the types
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
    cors: {
        origin: "http://localhost:5173", // Allow your Vite client
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // 3. Listen for messages from client
    socket.on("send_message", (data) => {
        // Broadcast the message to everyone (including sender)
        io.emit("receive_message", data);
    });
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});