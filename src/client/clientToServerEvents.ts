export interface ClientToServerEvents {
    send_message: (data: { message: string; sender: string }) => void;
    start: (sender: string) => void;
}