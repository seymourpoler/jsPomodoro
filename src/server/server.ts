import { Server } from "socket.io";

const io = new Server(3000, {
    cors: { origin: "*" } // Allow connections from Vite
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
});

io.on("disconnection", (socket) => {
    console.log("Client disconnected:", socket.id);
});


console.log("Server running on port 3000");