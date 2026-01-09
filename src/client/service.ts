import {io, Socket} from 'socket.io-client';

export class Service{
    private readonly socket: Socket;

    constructor(){
        this.socket = io('http://localhost:3001');
    }

    public start() : void {
        this.socket.emit('start',{
            sender: this.socket.id || "Anonymous",
        });
    }

    public stop() : void {
        this.socket.emit('stop',{
            sender: this.socket.id || "Anonymous",
        });
    }

    public reset() : void {
        this.socket.emit('reset',{
            sender: this.socket.id || "Anonymous",
        });
    }

    public subscribeWhenTimeIsUpdated(handler:(time: number)=>void):void {
        this.socket.on('updated_time', (time: number) => {
            handler(time);
        });
    }
}