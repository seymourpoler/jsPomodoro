import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);
let numberOfSeconds = 0;
let timerInterval: NodeJS.Timeout | undefined = undefined;

const io = new Server(server, {
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

        if (timerInterval) {
            console.log("Timer already running, ignoring start request");
            return;
        }

        timerInterval = setInterval(() => {
            numberOfSeconds++;
            // Broadcast the new numberOfSeconds value to EVERYONE
            io.emit("updated_time", numberOfSeconds);
        }, 1000);
    });

    socket.on("stop", () => {
        console.log(`User stop: ${socket.id}`);
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = undefined; // Reset to undefined so it can be started again
            console.log("Timer stopped successfully");
        }
    });

    socket.on('reset', (sender) => {
        console.log(`User reset: ${socket.id}`);
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = undefined;
        }
        numberOfSeconds = 0;
        io.emit("updated_time", numberOfSeconds);
    });
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});