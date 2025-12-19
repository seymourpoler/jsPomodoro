import {io, Socket} from 'socket.io-client';
import {ServerToClientEvents} from "./serverToClientEvents";
import {ClientToServerEvents} from "./clientToServerEvents";
import {Service} from "./service";
import {View} from "./view";
import {Presenter} from "./presenter";

// 2. Initialize Socket
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:3001');

document.getElementById('send')?.addEventListener('click', (event: Event) => {
    event.preventDefault();

    const text = document.querySelector<HTMLInputElement>('#message-input')!.value;
    document.querySelector<HTMLInputElement>('#message-input')!.value = '';
    socket.emit('send_message', {
        message: text,
        sender: socket.id || "Anonymous"
    });
});

// 4. Handle Incoming Messages
socket.on('receive_message', (data) => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message-item';
    messageElement.innerHTML = `<strong>${data.sender}:</strong> ${data.message}`;

    const messageContainer = document.querySelector<HTMLDivElement>('#messages')!;
    messageContainer.appendChild(messageElement);
    // Auto-scroll to the bottom
    messageContainer.scrollTop = messageContainer.scrollHeight;
});

const service = new Service();
const view = new View();
new Presenter(view, service);