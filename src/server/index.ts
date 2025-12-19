import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);
let counter = 0;
let timerInterval: NodeJS.Timeout | null = null;

interface ServerToClientEvents {
    receive_message: (data: { message: string, sender: string }) => void;
    timer_update: (time: number) => void;
}

interface ClientToServerEvents {
    send_message: (data: { message: string, sender: string }) => void;
    start : (sender: string) => void;
}

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        // Broadcast the message to everyone (including sender)
        console.log('message received', data);
        io.emit("receive_message", data);
    });

    socket.on('start', (sender) =>{
        console.log(`User started: ${sender}`);
        timerInterval = setInterval(() => {
            counter++;
            // Broadcast the new counter value to EVERYONE
            io.emit("timer_update", counter);
        }, 1000);
    });
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});