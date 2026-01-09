import {io, Socket} from 'socket.io-client';
import {Service} from "./service";
import {View} from "./view";
import {Presenter} from "./presenter";

// 2. Initialize Socket
// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:3001');
const socket = io('http://localhost:3001');

document.getElementById('send')?.addEventListener('click', (event: Event) => {
    event.preventDefault();

    const text = document.querySelector<HTMLInputElement>('#message-input')!.value;
    document.querySelector<HTMLInputElement>('#message-input')!.value = '';
    socket.emit('send_message', {
        message: text,
        sender: socket.id || "Anonymous"
    });
});

document.getElementById('reset')?.addEventListener('click', (event: Event) => {
    event.preventDefault();

    socket.emit('reset');
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

socket.on('updated_time', (time) => {
    // const minutes = document.getElementById('minutes');
    // if(minutes) minutes.innerHTML = time.minutes;
    //
    // const hours = document.getElementById('hours');
    // if(hours) hours.innerText = time.hours;

    const minutes = document.getElementById('minutes');
    if(minutes) minutes.innerHTML = time;
});

const service = new Service();
const view = new View();
new Presenter(view, service);