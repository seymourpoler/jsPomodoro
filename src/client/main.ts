import { io, Socket } from 'socket.io-client';

// 1. Define Types (Same as Server)
interface ServerToClientEvents {
    receive_message: (data: { message: string; sender: string }) => void;
}

interface ClientToServerEvents {
    send_message: (data: { message: string; sender: string }) => void;
}

// 2. Initialize Socket
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:3001');

// 3. Select DOM Elements
// We use 'as HTMLElement' so TypeScript knows exactly what properties are available
const messageContainer = document.querySelector<HTMLDivElement>('#messages')!;
const messageForm = document.querySelector<HTMLFormElement>('#chat-form')!;
const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;

// 4. Handle Incoming Messages
socket.on('receive_message', (data) => {
    appendMessage(data.sender, data.message);
});

// 5. Handle Form Submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    const message = messageInput.value;

    if (message.trim() !== "") {
        // Send to server
        socket.emit('send_message', {
            message: message,
            sender: socket.id || "Anonymous"
        });

        // Clear input
        messageInput.value = '';
    }
});

// Helper function to update the DOM
function appendMessage(sender: string, text: string) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message-item';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;

    messageContainer.appendChild(messageElement);

    // Auto-scroll to the bottom
    messageContainer.scrollTop = messageContainer.scrollHeight;
}