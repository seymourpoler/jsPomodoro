export class Sound {
    public play(): void{
        const audio = new Audio('./timer/alarm.mp3');
        audio.play();
    }
}