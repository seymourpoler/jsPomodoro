import {io, Socket} from 'socket.io-client';
import {ServerToClientEvents} from "./serverToClientEvents";
import {ClientToServerEvents} from "./clientToServerEvents";

export class Service{
    private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents>;

    constructor(){
        this.socket = io('http://localhost:3001');
    }

    public start() : void {
        const sender = this.socket.id || "";
        this.socket.emit('start', sender);
    }

    public subscribeWhenTimeIsUpdated(handler:(time: number)=>void):void {
        this.socket.on('timer_update', (time: number) => {
            handler(time);
        });
    }
}