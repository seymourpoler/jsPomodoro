// 1. Define Types (Same as Server)
export interface ServerToClientEvents {
    receive_message: (data: { message: string; sender: string }) => void;
    timer_update: (time: number) => void;
}