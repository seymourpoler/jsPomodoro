import { io } from "socket.io-client";
import {TimerState} from "./timerState";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to server!");
});

socket.on("sync", (serverState: TimerState) => {
    console.log("Received Sync:", serverState);
    console.log(serverState);
});