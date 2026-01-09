import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);
let numberOfSeconds = 0;
var timerInterval: NodeJS.Timeout | undefined = undefined;

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

        timerInterval = setInterval(() => {
            numberOfSeconds++;
            // Broadcast the new numberOfSeconds value to EVERYONE
            io.emit("updated_time", numberOfSeconds);
        }, 1000);
    });

    socket.on("stop", () => {
        console.log(`User stop: ${socket.id}`);
        clearInterval(timerInterval);
        timerInterval = undefined;
    });
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});